import Scores from './../Scores/Scores';
import ReactDOM from 'react-dom';
import './Decisions.css';
import React, { Component } from 'react'


export default class Decisions extends Component {
  state = {
    question: "wait...",
    path0: "",
    path1: "",
    answer: -1
  }

  myfunction = (id) => {
    // create a new XMLHttpRequest
    /*var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('POST', 'localhost/desicion')
    xhr.send(JSON.stringify({ answer: num.toString(this.state.answer)==id}))
    // send the request
    xhr.send()*/

    ReactDOM.render(<Scores />, document.getElementById('root'));
  }

  getData(){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      var jsonResponse = JSON.parse(xhr.responseText);

      this.setState({
        path0: jsonResponse.path0,
        path1: jsonResponse.path1,
        question: jsonResponse.question,
        answer: jsonResponse.answer
      })
      console.log(this.state);
    })
    console.log("hwew");
    // open the request with the verb and the url
    xhr.open('GET', 'localhost/decision')
    // send the request
    xhr.send()
  }

  componentDidMount(){
    this.getData();
  }


  render() {

    return (
      <div>
        <p>{this.state.question}</p>
        <div className="column">
          <button id="0" onClick={this.myfunction(this.id)}><img src={this.state.path0} alt="pic0"></img></button>
        </div>
        <div className="column">
          <button id="1" onClick={this.myfunction(this.id)}><img src={this.state.path1} alt="pic1"></img></button>
        </div>
      </div>
    )

  }
}
