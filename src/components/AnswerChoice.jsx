import React, { Component } from 'react';
import Question from './Question.jsx';

export default class Answer extends Component {
    

    render() {
        let answers = ["a", "b", "c", "d"];
        let row = [];
        answers.forEach(function(element) {
            row.push();
        })
        return (
            <div>
                <button className="choices" onClick={() => this.handleClick()}>{this.props.choice}</button>
            </div>
        )
    }
}