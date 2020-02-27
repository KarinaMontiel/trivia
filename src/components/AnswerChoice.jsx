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

    answerCheck() {
        let ans = this.props.correct;
        console.log("correct answer choice: "+ans);
        let clickId = this.props.id;
        //console.log(clickId);
        if (ans === clickId) {
            alert("correct!");
            this.setState({color: 'green'});
        } else {
            alert("incorrect! try again!");
            this.setState({color: 'gray'});
        }
        //return this.state.correct;
    }

    handleClick = () => {
        let ans = this.props.correct;
        console.log("correct answer choice: "+ans);
        let clickId = this.props.id;
        //console.log(clickId);
        if (ans === clickId) {
            alert("correct!");
            this.setState({color: 'green'});
        } else {
            alert("incorrect! try again!");
            this.setState({color: 'gray'});
        }
       // this.answerCheck();
        //this.setState({color: 'black'});
    }

    render() {
        return (
            <div>
                <button id={this.clickId} className={this.state.choices, this.state.color} onClick={this.handleClick}>{this.props.ansChoice}</button>
            </div>
        )
    }
}