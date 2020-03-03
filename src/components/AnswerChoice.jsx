import React, { Component } from 'react';

export default class Answer extends Component {
    constructor() {
        super();
        this.state = {
            correctAns: 5,
            color: 'black',
            choices : 'choices',
           
        }
      }

    answerCheck = (event) => {
        let ans = this.props.correct;
        // console.log("correct answer choice: "+ans);
        let clickId = this.props.answerID;
        // console.log("clicked:"+clickId);
        // debugger;
        if (ans === clickId) {
            alert("correct!");
            this.setState({color: 'green'});
        } else {
            alert("incorrect! try again!");
            this.setState({color: 'gray'});
        }
        return this.state.correct;
    }

    handleClick = () => {
        this.answerCheck();
    }

    render() {
        return (
            <div>
                <button id={this.clickId} className={this.state.choices, this.state.color} onClick={this.answerCheck}>{this.props.ansChoice}</button>
            </div>
        )
    }
}