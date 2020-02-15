import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from './Question.jsx';


class App extends Component { 

  render() {
    let base = this.props.data;
    //console.log(base);

      
    return (
      <div className="app">
        <Question why={base}/>
      </div>
    );
  }
}

export default App;