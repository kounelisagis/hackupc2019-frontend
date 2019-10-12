import './Scores.css';
import React, { Component } from 'react'


export default class Scores extends Component {

  state = {
    scores: [
      { image_path: "1.jpg", points: 5},
      { image_path: "2.jpg", points: 10}
    ]
  }

  renderTableData() {
    return this.state.scores.map((score, index) => {
      const { image_path, points } = score //destructuring
        return (
          <tr key={image_path}>
          <td>{<img src={image_path}></img>}</td>
          <td>{points}</td>
        </tr>
      )
    })
  }

  getData(){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      var jsonResponse = JSON.parse(xhr.responseText);

      this.setState({
        scores: jsonResponse.scores
      })

      console.log(this.state);
    })

    // open the request with the verb and the url
    xhr.open('POST', 'localhost/scores')
    xhr.send(JSON.stringify({ answer: true }))
    // send the request
    xhr.send()
  }

  componentDidMount(){
    this.getData();
  }


  render() {
    // get request of the scoretable

    return (
      <div>
         <h1 id='title'>Scoreboard</h1>
         <table id='students'>
            <tbody>
               {this.renderTableData()}
            </tbody>
         </table>
      </div>
    )
  }
}
