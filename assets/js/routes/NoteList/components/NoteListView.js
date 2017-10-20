import React, { Component } from 'react';
import Style from '../../../css/style.css'
import Languages from './Languages';

class NoteListView extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { items: [], word: '', definition: '', context: '', language: 'EN', 'created': '', 'color': '#F7E999'}
    this.notes = []
    this.handleChangeWord = this.handleChangeWord.bind(this)
    this.handleChangeDefinition = this.handleChangeDefinition.bind(this)
    this.handleChangeContext = this.handleChangeContext.bind(this)
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loadNoteListData = this.loadNoteListData.bind(this)
    this.loadNoteData = this.loadNoteData.bind(this)
    this.postNoteData = this.postNoteData.bind(this)
    this.deleteNoteData = this.deleteNoteData.bind(this)
    this.getColor = this.getColor.bind(this)
  }

  componentDidMount() {
    this.loadNoteListData()
  }

  loadNoteListData() {
    $.ajax({
      method: 'GET',
      url: '/api/users/i/',
      datatype: 'json',
      headers: {
        'Authorization': 'Token ' + localStorage.token
      },
      success: function (res) {
        console.log(res)
        res.notes.map((note) => {
          this.loadNoteData(note)
        })
      }.bind(this),
      fail: function (err) {
        console.log("error message: " + err.message)
      }
    })
  }

  loadNoteData(id) {
    $.ajax({
      method: 'GET',
      url: '/api/notes/' + id,
      datatype: 'json',
      headers: {
        'Authorization': 'Token ' + localStorage.token
      },
      success: function (res) {
        console.log(res)
        res.color = this.getColor(res.language)
        console.log(res.color)
        this.setState((prevState) => ({
          items: prevState.items.concat(res).sort(function(a,b){
            var langA = a.language;
            var langB = b.language;
            if (langA < langB){
            return -1;
            }
            if (langA > langB){
            return 1;
            }
            return 0;
            }),
        }))
      }.bind(this),
      fail: function (err) {
        console.log("error message: " + err.message)
      }
    })
  }

  postNoteData() {
    $.ajax({
      method: 'POST',
      url: '/api/notes/',
      data: {
        word: this.state.word,
        definition: this.state.definition,
        context: this.state.context,
        language: this.state.language,
        created: Date.now()
      },
      datatype: 'json',
      headers: {
        'Authorization': 'Token ' + localStorage.token
      },
      success: function (res) {
        console.log(res)
        res.color = this.getColor(res.language)
        console.log(res.color)
        this.setState((prevState) => ({
          items: prevState.items.concat(res).sort(function(a,b){
            var langA = a.language;
            var langB = b.language;
            if (langA < langB){
            return -1;
            }
            if (langA > langB){
            return 1;
            }
            return 0;
            }),
          word: '',
          definition: '',
          context: '',
          language: 'EN',
          created: '',
          color: '',
        }));
      }.bind(this),
      fail: function (err) {
        console.log("error message: " + err.message)
      }
    })
  }

  deleteNoteData(id) {
    $.ajax({
      method: 'DELETE',
      url: '/api/notes/' + id,
      headers: {
        'Authorization': 'Token ' + localStorage.token
      },
      success: function (res) {
        console.log(res)
        this.setState((prevState) => ({
          items: prevState.items.filter(( obj ) => {return obj.id !== id}),
          word: '',
          definition: '',
          context: '',
          language: 'EN',
          created: '',
        }));
      }.bind(this),
      fail: function (err) {
        console.log("error message: " + err.message)
      }
    })
  }

  getColor(lang) {
    var colorcode = (1000000/Languages.length)*(Languages.findIndex(language => language.code==lang))
    var red = colorcode.toString().split('.')[0].slice(0,2) || '0'
    var green = colorcode.toString().split('.')[0].slice(2,4) || '0'
    var blue = colorcode.toString().split('.')[0].slice(4,6) || '0'
    var opacity = (0.4).toString()
    if (red == '0' && green == '0' && blue == '0'){
      return '#F7E999'
    }
    else {
      return 'rgba(' +
        red + ',' +
        green + ',' +
        blue + ',' + opacity + ')';
    }
  }

  handleChangeWord(e) {
    this.setState({ word: e.target.value })
  }

  handleChangeDefinition(e) {
    this.setState({ definition: e.target.value })
  }
  
  handleChangeContext(e) {
    this.setState({ context: e.target.value })
  }
  
  handleChangeLanguage(e) {
    this.setState({ language: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.word.length) {
      return;
    }
    this.postNoteData()
  }

  render() {
    return (
      <div className="App">
        <h3>Notes</h3>
        <ul style={{ listStyle: 'none'}}>
          {this.state.items.map(item => (
            <div className="note-wrap" style={{ 'backgroundColor': item.color }}>
              <span className="buttons">
                <a onClick={() => this.deleteNoteData(item.id)} className="pull-right"><i className="glyphicon glyphicon-trash"></i></a>
              </span>
              <li><b>Word:</b> {item.word}</li>
              <li><b>Definition:</b> {item.definition}</li>
              <li><b>Context:</b> {item.context}</li>
              <li><b>Language:</b> {item.language}</li>
              <li><b>Created:</b> {item.created}</li>
            </div>
          ))}
        </ul>
        <div className="note-wrap">  
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            Word: <input
              type="text"
              onChange={this.handleChangeWord}
              value={this.state.word}
              required
            />
            Definition: <textarea
              label="Definition"
              onChange={this.handleChangeDefinition}
              value={this.state.definition}
            />
            Context: <textarea
              onChange={this.handleChangeContext}
              value={this.state.context}
            />
          	Language: <select
            	onChange={this.handleChangeLanguage}
            	value={this.state.language}>
              {Languages.map((language) => <option key={language.code} value={language.code}>{language.value}</option>)}
            </select>
            <button type="submit" className="btn btn-default" >
              Add Note {this.state.items.length + 1}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteListView;
