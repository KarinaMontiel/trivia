import React, { Component } from 'react';
// import components
import Answer from './AnswerChoice';

// every new question: needs "new Loader"
class Loader {
  constructor(choices, correct_choice_index, question_text){
    // Fill in this constructor
    this.choices= choices;
    this.correct = correct_choice_index;
    this.qtext= question_text ? question_text : ":0";
   }
  }

class Question extends Component {
  
  render() {

    let q1 = new Loader(["48", "13", "52", "50"],3, "How many states are in the United States?");
    console.log(q1);

    //let answers = ["yes", "OvO", "no", "^_^''"];
    let ansRow = [];
    //for (let i=0; i<answers.length; i++) {
      //ansRow.push(<Answer choice={answers[i]} />);
    //}

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
   
        <button> next </button>
      </div>
    );

    }
  }
  
export default Question;

 