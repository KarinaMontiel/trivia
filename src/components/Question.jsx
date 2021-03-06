import React, { Component } from 'react';
// import components
import Answer from './AnswerChoice';

class Question extends Component {
  constructor() {
    super();
    this.state = {
        index: 0,
        color: 'black',
    }
  }

  handleClick = () => {
    this.setState({index: this.state.index+1, color: 'black'})
  }
  
  render() {
    let q = this.props.why;
    let qText = q[this.state.index].question_text;

    let answers = q[this.state.index].choices;
    let ansRow = [];
    for (let i=0; i<answers.length; i++) {
      ansRow.push(<Answer answerID={i} ansChoice={answers[i]} correct={q[this.state.index].correct_choice_index} key={answers[i]} />);
    }
  
    return (
      <div>
        <h1 className="questionBox">{qText}</h1>
        <br></br>
        <div className="ansrow">
          {ansRow}
        </div>
        <br></br>
   
        <button id="nextBtn" onClick={this.handleClick}> next </button>
        {/* {<button> something </button>} */}
      </div>
    );

  }
}
  
export default Question;

 