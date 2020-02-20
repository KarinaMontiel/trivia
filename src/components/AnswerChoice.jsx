import React, { Component } from 'react';

export default class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAns: 5,
        }
      }

    handleClick() {
        //do something to check the answer
        this.answerCheck();
        // toggle next button if aswer is correct
    }

    answerCheck() {
        let ans = this.props.correct;
        console.log("correct answer choice: "+ans);
        let clickId = this.props.id;
        console.log(clickId);
        // this.setState({correctAns: ans});
        // console.log(this.state.correctAns);
        if (ans === clickId) {
            alert("correct!");
        } else {
            alert("incorrect! try again!");
        }
        return this.state.correct;
    }

    render() {
        return (
            <div>
                <button id={this.clickId} className="choices" onClick={() => this.handleClick()}>{this.props.ansChoice}</button>
            </div>
        )
    }
}