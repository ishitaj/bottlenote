import React from 'react'
import bottleNoteLogo from '../../../public/bottleNote.png'
import Style from '../../../css/style.css'

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={bottleNoteLogo} className="App-logo" alt="bottleNote" />
      <h1 className="App-title">Welcome to bottleNote!</h1>
    </header>
    <p className="App-intro">
      Your personal <a href="http://news.nationalgeographic.com/news/2013/08/130806-dolphins-memories-animals-science-longest/">bottlenose dolphin</a> helps you remember new words in multiple languages!
    </p>
  </div>
)
