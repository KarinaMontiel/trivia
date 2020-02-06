import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import firebase from 'clients/firebase.js';
import { buildFirebase } from '../clients/firebase.js';

// import components

class Loader {
  constructor(choices, correct_choice_index, question_text){
    // Fill in this constructor
    this.choices= choices;
    this.correct = correct_choice_index;
    this.qtext= question_text ? question_text : ":0";
  }
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   var database = buildFirebase();
  //   var databaseRef = database.ref("/questions");
  //   databaseRef.once("value").then(function(data) {
  //   const questions = data.val();
  //   // Do something with the questions
  //   console.log(questions);
  //   });
  // }
  

  render() {
 

    let q1 = new Loader(["48", "13", "52", "50"],3, "How many states are in the United States?");
    // let q1 = new Loader(["48", "13", "52", "50"],3, "How many states are in the United States?");
    console.log(q1);
      
    return (
      <div className="app">
        Trivia!
        <Question />
      </div>
    );
  }
}

export default App;