import React from 'react'
import './App.css';
import PersonalFile from './PersonalFile'
import UpcomingFlightsFile from './UpcomingFlightsFile'
import FlightFile from './FlightFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      //ARRAYS
      currentPilotFile: [],
      currentUserFile: [],
      currentUserFlights: [],
      currentUserSelectedFlight: [],
      //INPUTS
      newFlightHoursTotal: '',
      currentPilotUser_ID: '',
      //USER DATA FIELDS
      currentWorkCenter_ID: '',
      currentUsername: '',
      currentEmailAddress: '',
      current_password: '',
      current_first_name: '',
      current_last_name: '',
      current_user_role: '',
      //PILOT DATA FIELDS
      currentPilotPilot_ID: '',     
      flightHoursTotal: '',
      current_shift: '',
      current_qualification: '',
      current_dnif: '',
      //FLIGHT DATA FIELDS
      current_flight_id:'',
      current_aircraft_id:'',
      current_scheduled_takeoff_timestamp:'',
      current_scheduled_landing_timestamp:'',
      current_actual_takeoff_timestamp:'',
      current_actual_landing_timestamp:'',
      current_call_sign: '',
      new_actual_takeoff_timestamp:'',
      new_actual_landing_timestamp:''
    }
  }


  //METHODS
  handlePilotInput = (event) =>{
    event.preventDefault()
    this.setState({currentPilotUser_ID: event.target.value})
  }

  async handlePilotSubmit (event) {
    event.preventDefault()
    const currentUserResponse = await fetch(`http://localhost:8080/users/${this.state.currentPilotUser_ID}`)
    const currentUserJson = await currentUserResponse.json()
    this.setState({currentUserFile: currentUserJson[0]})
    this.setState({currentWorkCenter_ID: currentUserJson[0].work_center_id})
    this.setState({currentUsername: currentUserJson[0].username})
    this.setState({currentEmailAddress: currentUserJson[0].email_address})
    this.setState({current_password: currentUserJson[0].pass_word})
    this.setState({current_first_name: currentUserJson[0].first_name})
    this.setState({current_last_name: currentUserJson[0].last_name})
    this.setState({current_user_role: currentUserJson[0].user_role})
    const currentPilotResponse = await fetch(`http://localhost:8080/pilots/${this.state.currentPilotUser_ID}`)
    const currentPilotJson = await currentPilotResponse.json()
    this.setState({currentPilotFile: currentPilotJson[0]}) 
    this.setState({currentPilotPilot_ID: currentPilotJson[0].pilot_id})
    this.setState({flightHoursTotal: currentPilotJson[0].flying_hours})
    this.setState({current_shift: currentPilotJson[0].shift})
    this.setState({current_qualification: currentPilotJson[0].qualification})
    this.setState({current_dnif: currentPilotJson[0].dnif})
  }
  
  async handlePilotSchedule (event) {
    event.preventDefault()
    const currentUserFlightsResponse = await fetch(`http://localhost:8080/flight/${this.state.currentPilotPilot_ID}`)
    const currentUserFlightsJson = await currentUserFlightsResponse.json()
    this.setState({currentUserFlights: currentUserFlightsJson})
  }

  flightHoursInput = (event) => {
  event.preventDefault()
  this.setState({newFlightHoursTotal: event.target.value})
  }

  handleFlightHoursUpdate = async () => {
    const pilot_data = {
      pilot_id: this.state.currentPilotPilot_ID,
      // user_id: this.state.currentPilotUser_ID,
      // dnif: this.state.current_dnif,
      // shift: this.state.current_shift,
      flying_hours: this.state.newFlightHoursTotal
      // qualifcation: this.state.current_qualifcation
    }
    console.log(pilot_data)
    await fetch(`http://localhost:8080/pilots/${this.state.currentPilotUser_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pilot_data)
    })
    // .then(await (await fetch(`http://localhost:8080/users/${this.state.currentPilotUser_ID}`)).json())
    // .then(json => this.setState({currentUserFile: json}))
    .then(await (await fetch(`http://localhost:8080/pilots/${this.state.currentPilotUser_ID}`)).json())
    .then(json => this.setState({currentPilotFile: json}))
  }

  handleFlightInput = (event) =>{
    event.preventDefault()
    this.setState({current_flight_id: event.target.value})
  }

  async handleViewFlight (event){
    event.preventDefault()
    const currentFlightResponse = await fetch(`http://localhost:8080/flight/singleflight/${this.state.current_flight_id}`)
    const currentFlightJson = await currentFlightResponse.json()
    this.setState({currentUserSelectedFlight: currentFlightJson[0]})
    this.setState({current_flight_id:currentFlightJson[0].flight_id})
    this.setState({current_aircraft_id:currentFlightJson[0].aircraft_id})
    this.setState({current_scheduled_takeoff_timestamp:currentFlightJson[0].scheduled_takeoff_timestamp})
    this.setState({current_scheduled_landing_timestamp:currentFlightJson[0].scheduled_landing_timestamp})
    this.setState({current_actual_takeoff_timestamp:currentFlightJson[0].actual_takeoff_timestamp})
    this.setState({current_actual_landing_timestamp:currentFlightJson[0].actual_landing_timestamp})
    this.setState({current_call_sign:currentFlightJson[0].call_sign})
  }

  handleTakeoffChange = (event) => {
    event.preventDefault()
    this.setState({new_actual_takeoff_timestamp: event.target.value})
    }

  handleLandingChange = (event) => {
    event.preventDefault()
    this.setState({new_actual_takeoff_timestamp: event.target.value})
    }

  handleTakeoffUpdate = async () => {
    const takeoff_data = {
      actual_takeoff_timestamp: this.state.new_actual_takeoff_timestamp,
      flight_id: this.state.current_flight_id
    }
    console.log(takeoff_data)
    await fetch(`http://localhost:8080/flight/singleflight/${this.state.current_flight_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(takeoff_data)
    })
    .then(await (await fetch(`http://localhost:8080/flight/singleflight/${this.state.current_flight_id}`)).json())
    .then(json => this.setState({currentUserSelectedFlight: json}))
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
        />
        <UpcomingFlightsFile
        scheduledFlights = {this.state.currentUserFlights}
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile}     
        />
        <h2>Flight Details</h2>
        <input type="text" placeholder="Enter Flight ID Number" onChange={this.handleFlightInput}/>
        <button type="button" onClick ={this.handleViewFlight.bind(this)}>Get Flight Details</button>
        <FlightFile
        flightFile = {this.state.currentUserSelectedFlight}
        onTakeoffChange ={this.handleTakeoffChange}
        onLandingChange ={this.handleLandingChange}
        onTakeoffUpdate ={this.handleTakeoffUpdate}
        onLandingUpdate = {this.handleLandingUpdate}
        />
        
      </div>
    )
  }
}

export default App;
