import React from 'react'
//import logo from './logo.svg';
import './App.css';
import PersonalFile from './PersonalFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      allPilotFiles: {},
      currentPilot: '',
      pilotFile: {},
    }
  }
  //METHODS
  handlePilotInput = (event) =>{
    event.preventDefault()
    this.setState({currentPilot: event.target.value})
  }

  async handlePilotSubmit (event) {
    event.preventDefault()
    const response = await fetch()
    const json = await response.json()
    this.setState({pilotFile: json})
  }

  //RENDER
  render() {
    return (
      <div >
        <h1>Pilot Microservice</h1>
        <p>Enter Username</p>
        <PersonalFile
        onPilotInput = {this.handlePilotInput}
        onPilotSubmit = {this.handlePilotSubmit.bind(this)} 
        />
      </div>
    )
  }
}

export default App;
