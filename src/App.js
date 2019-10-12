import React, { Component } from 'react'
import Decisions from './Decisions/Decisions';
import ReactDOM from 'react-dom';
import './App.css';


export default class App extends Component {

  click = () => {

    // post request

/*
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('POST', 'localhosttttttt')
    xhr.send(JSON.stringify({ image: event.target.files[0]}))
    // send the request
    xhr.send()
*/
    ReactDOM.render(<Decisions />, document.getElementById('root'));
  }


  render() {
    return (
      <div id="container">
        Your Picture: <input id="myFileInput" type="file" accept="image/*" capture="camera"></input>
        <br></br>Your Age: <input id="answer1" type="text"></input>
        <br></br>You are afraid of: <input id="answer2" type="text"></input>
        <br></br>Your favourite animal is: <input id="answer3" type="text"></input>
        <br></br>Your favourite sport is: <input id="answer4" type="text"></input>
        <br></br>Your favourite color is: <input id="answer5" type="text"></input>
        <br></br>Your current occupations is: <input id="answer6" type="text"></input>
        <br></br>Your favourite music group is: <input id="answer7" type="text"></input>
        <br></br><br></br><button type="button" onClick={this.click}>PLAY!</button>
      </div>
    )
  }
}
