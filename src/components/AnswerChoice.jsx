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
    }

    answerCheck() {
        let ans = this.props.correct;
        console.log(ans);
        // this.setState({correctAns: ans});
        // console.log(this.state.correctAns);
        return this.state.correct;
    }

    render() {
        this.answerCheck();
        return (
            <div>
                <button className="choices" onClick={() => this.handleClick()}>{this.props.ansChoice}</button>
            </div>
        )
    }
}