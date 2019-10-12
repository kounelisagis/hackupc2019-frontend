import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
  state = {
    textValue: 'Upload your photo!'
  }

  onChangeHandler=event => {
    this.setState({
      textValue: 'Uploading'
    })

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
  }


  render() {
    return (
      <div id="container">
        <p id="load_text">{this.state.textValue}</p>
        <input id="myFileInput" type="file" accept="image/*" capture="camera" onChange={this.onChangeHandler}></input>
      </div>
    )
  }
}
