import React, { Component } from 'react';
import Question from './Question.jsx';

export default class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "false",
        }
    }

    handleClick() {
        // let newStatus = this.state.status;
        this.setState({status: "true"})
        console.log(this.state.status);
    }

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