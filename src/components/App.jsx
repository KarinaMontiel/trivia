import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';

// import components

// class Loader {
//   constructor(choices, correct_choice_index, question_text){
//     // Fill in this constructor
//     this.choices= choices;
//     this.correct = correct_choice_index;
//     this.qtext= question_text ? question_text : ":0";
//   }
// }

class App extends Component { 

  render() {
    let base = this.props.data;
    //console.log(base);

      
    return (
      <div className="app">
        Trivia!
        <Question why={base}/>
      </div>
    );
  }
}

export default App;