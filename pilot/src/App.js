import React from 'react'
//import logo from './logo.svg';
import './App.css';
import PersonalFile from './PersonalFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      allUserFiles: [
      {User_ID:1,Workcenter_ID:"Maintainence Bay", Username:"alan.scott", Email_Address: "maintainer1@usaf.mil", Password:"password1",First_Name:"Alan",Last_Name:"Scott", User_Role: "maintainer"},
      {User_ID:2,Workcenter_ID:"Hangar", Username:"sam.retzlaff", Email_Address: "pilot1@usaf.mil", Password:"password2",First_Name:"Sam",Last_Name:"Retzlaff", User_Role: "pilot"},
      {User_ID:3,Workcenter_ID:"Hangar", Username:"andrew.rohn", Email_Address: "pilot2@usaf.mil", Password:"password3",First_Name:"Andrew",Last_Name:"Rohn", User_Role: "pilot"},
      {User_ID:4,Workcenter_ID:"Hangar", Username:"robert.cameron", Email_Address: "pilot3@usaf.mil", Password:"password4",First_Name:"Robert",Last_Name:"Cameron", User_Role: "pilot"},
      {User_ID:5,Workcenter_ID:"Hangar", Username:"rex.ayers", Email_Address: "pilot4@usaf.mil",Password:"password5",First_Name:"Rex",Last_Name:"Ayers", User_Role: "pilot"}
      ],
      allPilotFiles: [
      {Pilot_ID:1, User_ID:2, DNIF: false, Shift:"Day", Flying_Hours:600, Qualification:"Instructor"},
      {Pilot_ID:2, User_ID:3, DNIF: false, Shift: "Day", Flying_Hours:80, Qualification:"Wingman"},
      {Pilot_ID:3, User_ID:4, DNIF: false, Shift: "Night", Flying_Hours:5, Qualification:"Student"},
      {Pilot_ID:4, User_ID:5, DNIF: true, Shift: "Day", Flying_Hours:800, Qualification:"Evaluator"},
    ],
      currentPilotUser_ID: '',
      currentPilotFile: {},
      currentUserFile: {}
    }
  }

  //METHODS
  // async dataHandler() {
  //   const usersResponse = await fetch('/dummyUser.json')
  //   const pilotsResponse = await fetch('/dummyPilot.json')
  //   const usersJson = await usersResponse.json()
  //   const pilotsJson = await pilotsResponse.json()
  //   this.setState({allUserFiles: usersJson,
  //   allPilotFiles: pilotsJson})
  // }

  handlePilotInput = (event) =>{
    event.preventDefault()
    this.setState({currentPilotUser_ID: event.target.value})
  }

  async handlePilotSubmit (event) {
    event.preventDefault()
    const userFile = this.state.allUserFiles[4]
    const pilotFile = this.state.allPilotFiles[3]
    // const userFile = this.state.allUserFiles.filter(user => user.User_ID === this.state.currentPilotUser_ID)
    // const pilotFile = this.state.allPilotFiles.filter(pilot => pilot.User_ID === this.state.currentPilotUser_ID)
    this.setState({currentUserFile: userFile, currentPilotFile: pilotFile})
  }

  //RENDER
  render() {
    return (
      <div >
        <h1>Pilot Microservice</h1>
        <p>Enter User_ID</p>
        <PersonalFile
        onPilotInput = {this.handlePilotInput}
        onPilotSubmit = {this.handlePilotSubmit.bind(this)}
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile} 
        />
      </div>
    )
  }
}

export default App;
