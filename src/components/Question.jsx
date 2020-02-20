import React, { Component } from 'react';
// import components
import Answer from './AnswerChoice';

// UNSUED : every new question: needs "new Loader"
// class Loader {
//   constructor(choices, correct_choice_index, question_text){
//     // Fill in this constructor
//     this.choices= choices;
//     this.correct = correct_choice_index;
//     this.qtext= question_text ? question_text : ":0";
//   }
// }

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
    }
  }

  handleClick() {
    this.setState({index: this.state.index+1})
    console.log(this.state.index);
  }
  
  render() {
    let q = this.props.why;
    let qText = q[this.state.index].question_text;
    
    let answers = q[this.state.index].choices;
    let ansRow = [];
    for (let i=0; i<answers.length; i++) {
      ansRow.push(<Answer ansChoice={answers[i]} correct={q[this.state.index].correct_choice_index} />);
    }

    return (
      <div>
        <h1 className="questionBox">{qText}</h1>
        <br></br>
        {ansRow}
        <br></br>
   
        <button onClick={() => this.handleClick()}> next </button>
      </div>
    );

  }
}
  
export default Question;

 