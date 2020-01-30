import React, { Component } from 'react';
// import components
import Answer from './AnswerChoice';


class Question extends Component {
  
  render() {
    let answers = ["yes", "OvO", "no", "^_^''"];
    let ansRow = [];
    for (let i=0; i<answers.length; i++) {
      ansRow.push(<Answer choice={answers[i]} />);
    }

    class Loader {
      constructor(choices, correct_choice_index, question_text){
        // Fill in this constructor
        this.choices= choices;
        this.correct = correct_choice_index;
        this.qtext= question_text;
       }
  
    }

    return (
      <div>
        Add your QuestionText, Reset Button and AnswerButtons here.
        {/*
          framework:
          <question>
          <answer choice>
          <answer choice>
          <answer choice>
          <answer choice>

          <next button>
        */}
        <h1 className="questionBox">Here is the question</h1>
        <br></br>
        <div>{ansRow}</div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button> next </button>
      </div>
    );
  }
}

export default Question;