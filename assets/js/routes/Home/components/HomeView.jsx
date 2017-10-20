import React from 'react'
import bottleNoteLogo from '../../../public/bottleNote.png'
import NotePage from '../../../public/NotePage.png'
import Style from '../../../css/style.css'

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={bottleNoteLogo} className="App-logo" alt="bottleNote" />
      <h1 className="App-title">Welcome to bottleNote!</h1>
    </header>
    <p className="App-intro">
      Your personal <a href="http://news.nationalgeographic.com/news/2013/08/130806-dolphins-memories-animals-science-longest/">bottlenose dolphin</a> helps you remember new words in multiple languages!<br/>
      BOTTLENOSE DOLPHINS have the longest memory in our Animal Kingdom! Don't ever forget a word with the bottleNote Note-Taking app for language-learners. You can capture words in multiple languages with their definitions and context.<br/>
      <img src={NotePage} className="img-responsive" alt="bottleNote" />
    </p>
  </div>
)
