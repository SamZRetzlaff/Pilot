import React from 'react'
import './App.css';
import PersonalFile from './PersonalFile'
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
      current_dnif: ''
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
    this.setState({currentWorkCenter_ID: currentUserJson[0].work_center_id})
    this.setState({currentUsername: currentUserJson[0].username})
    this.setState({currentEmailAddress: currentUserJson[0].email_address})
    this.setState({current_password: currentUserJson[0].pass_word})
    this.setState({current_first_name: currentUserJson[0].first_name})
    this.setState({current_last_name: currentUserJson[0].last_name})
    this.setState({current_user_role: currentUserJson[0].user_role})
    const currentPilotResponse = await fetch(`http://localhost:3001/pilots/${this.state.currentPilotUser_ID}`)
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
    const currentUserFlightsResponse = await fetch(`http://localhost:3001/flight/${this.state.currentPilotPilot_ID}`)
    const currentUserFlightsJson = await currentUserFlightsResponse.json()
    this.setState({currentUserFlights: currentUserFlightsJson})
  }

  flightHoursInput = (event) => {
  event.preventDefault()
  this.setState({newFlightHoursTotal: event.target.value})
  }

  // handleFlightHoursUpdate = async () => {
  //   const pilot_data = {
  //     pilot_id: this.state.currentPilotPilot_ID,
  //     // user_id: this.state.currentPilotUser_ID,
  //     // dnif: this.state.current_dnif,
  //     // shift: this.state.current_shift,
  //     flying_hours: this.state.flightHoursTotal
  //     // qualifcation: this.state.current_qualifcation
  //   }
  //   await fetch(`http://localhost:3001/pilots/${this.state.currentPilotUser_ID}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content_Type': 'application/json'
  //     },
  //     body: JSON.stringify(pilot_data)
  //   })
    // .then(() => this.fetchData(`http://localhost:3001/pilots/${this.state.currentPilotUser_ID}`, 'GET'))
    // .then(json => this.setState({currentPilotFile: json}))
  // }
// handleFlightHoursUpdate = (event) => {
//   event.preventDefault()
//   const newFlightHours = this.newFlightHoursTotal
//   this.setState({flightHoursTotal: newFlightHours})
// }


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
