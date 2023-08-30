import { useState } from 'react'
import './App.css'
import Questions from './Questions.jsx'
import questions from "./data"
function App() {

  return (
    <div className="container">
      <h1 className="header">Questions</h1>{questions.map( question =>{
        return(
      <Questions key={question.id} {...question}/>)
    })}</div>
  )
}

export default App
