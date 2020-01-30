import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
// import components

class App extends Component {

  render() {
    class Loader {
      constructor(choices, correct_choice_index, question_text){
        // Fill in this constructor
        this.choices= choices;
        this.correct = correct_choice_index;
        this.qtext= question_text ? question_text : ":0";
       }
      }

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