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
    console.log(this.state.index);
  }
  
  render() {
    let q = this.props.why;
    let qText = q[this.state.index].question_text;
    
    debugger;
   
    //for (let i=0; i<answers.length; i++) {
     // ansRow.push(<Answer ansChoice={answers[i]} correct={q[this.state.index].correct_choice_index} id={i} />);
   // }
  
    return (
      <div>
        <h1 className="questionBox">{qText}</h1>
        <br></br>
        {
          q[this.state.index].choices.map( (answer, i) => {
            return (<Answer ansChoice={answer} correct={q[this.state.index].correct_choice_index} />)
          })
        }
        <br></br>
   
        <button id="nextBtn" onClick={this.handleClick}> next </button>
        {/* {<button> something </button>} */}
      </div>
    );

  }
}
  
export default Question;

 