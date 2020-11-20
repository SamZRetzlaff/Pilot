import React from 'react'
//import logo from './logo.svg';
import './App.css';
import PersonalFile from './PersonalFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      currentPilotUser_ID: '',
      currentPilotFile: [],
      currentUserFile: [],
      currentPilotPilot_ID: '',
      currentUserFlights: []
    }
  }

  //METHODS
  handlePilotInput = (event) =>{
    event.preventDefault()
    this.setState({currentPilotUser_ID: event.target.value})
  }

  async handlePilotSubmit (event) {
    event.preventDefault()
    const currentUserResponse = await fetch(`http://localhost:3001/users/${this.state.currentPilotUser_ID}`)
    const currentUserJson = await currentUserResponse.json()
    this.setState({currentUserFile: currentUserJson[0]})
    const currentPilotResponse = await fetch(`http://localhost:3001/pilots/${this.state.currentPilotUser_ID}`)
    const currentPilotJson = await currentPilotResponse.json()
    this.setState({currentPilotFile: currentPilotJson[0]}) 
    this.setState({currentPilotPilot_ID: currentPilotJson[0].pilot_id})
    const currentUserFlightsResponse = await fetch(`http://localhost:3001/flight/${this.state.currentPilotPilot_ID}`)
    const currentUserFlightsJson = await currentUserFlightsResponse.json()
    this.setState({currentUserFlights: currentUserFlightsJson})
  }

  //RENDER
  render() {
    return (
      <div >
        <h1>Pilot Microservice</h1>
        <p>Enter User_ID</p>
        <input type="text" onChange={this.handlePilotInput}/>
        <button onClick={this.handlePilotSubmit.bind(this)}>Get Personal File</button>
        <button onClick={this.handlePilotSubmit.bind(this)}>Get Flight Schedule</button>
        <PersonalFile        
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile} 
        />
        {/* <FlightFile
        /> */}
      </div>
    )
  }
}

export default App;
