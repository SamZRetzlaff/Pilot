import React from 'react'
import './App.css';
import PersonalFile from './PersonalFile'
import FlightFile from './FlightFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      currentPilotUser_ID: '',
      currentPilotFile: [],
      currentUserFile: [],
      currentPilotPilot_ID: '',
      currentUserFlights: [],
      newFlightHoursTotal: '',
      flightHoursTotal: []
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
    this.setState({flightHoursTotal: currentPilotJson[0].flying_hours})
  }
  
  async handlePilotSchedule (event) {
    event.preventDefault()
    const currentUserFlightsResponse = await fetch(`http://localhost:3001/flight/${this.state.currentPilotPilot_ID}`)
    const currentUserFlightsJson = await currentUserFlightsResponse.json()
    this.setState({currentUserFlights: currentUserFlightsJson})
  }

flightHoursInput = (event) => {
  event.preventDefault()
  this.setState({newFlightHoursTotal: event.target.value})
  console.log(typeof(newFlightHoursTotal))
}

handleFlightHoursUpdate = (event) => {
  event.preventDefault()
  const newFlightHours = this.newFlightHoursTotal
  this.setState({flightHoursTotal: newFlightHours})
}

  //RENDER
  render() {
    return (
      <div >
        <h1>Pilot Microservice</h1>
        <p>Enter User_ID</p>
        <input type="text" onChange={this.handlePilotInput}/>
        <button onClick={this.handlePilotSubmit.bind(this)}>Get Personal File</button>
        <button onClick={this.handlePilotSchedule.bind(this)}>Get Flight Schedule</button>
        <PersonalFile        
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile}  
        onFlightHoursChange ={this.flightHoursInput}
        onFlightHoursUpdate ={this.handleFlightHoursUpdate}
        newFlightHours = {this.newFlightHoursTotal}
        />
        <FlightFile
        scheduledFlights = {this.state.currentUserFlights}
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile}        
        />
      </div>
    )
  }
}

export default App;
