import React, {Component} from 'react';
import './App.css';

class AddNumber extends Component{
  render(){
    return(
      <div>
        <hi>Add Number</hi>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    )
  }
}

class AddNumberRoot extends Component{
  render(){
    return(
      <div>
        <hi>Add Number Root</hi>
        <AddNumber></AddNumber>
      </div>
    )
  }
}

class DisplayNumber extends Component{
  render(){
    return(
      <div>
        <hi>Display Number</hi>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    )
  }
}

class DisplayNumberRoot extends Component{
  render(){
    return(
      <div>
        <hi>Display Number Root</hi>
        <DisplayNumber></DisplayNumber>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
