import React from 'react'
//import logo from './logo.svg';
import './App.css';
import PersonalFile from './PersonalFile'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      allUserFiles: [],
      allPilotFiles: [],
      currentPilotUser_ID: '',
      currentPilotFile: [],
      currentUserFile: []
    }
  }

  //METHODS
  
  async componentDidMount() {
    const allUsersResponse = await fetch(`http://localhost:3001/users`)
    const usersJson = await allUsersResponse.json()
    this.setState({allUserFiles: usersJson})
    const allPilotsResponse = await fetch(`http://localhost:3001/pilots`)
    const pilotsJson = await allPilotsResponse.json()
    this.setState({allPilotFiles: pilotsJson})
  }

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
  }

  //RENDER
  render() {
    return (
      <div >
        <h1>Pilot Microservice</h1>
        <p>Enter User_ID</p>
        <input type="text" onChange={this.handlePilotInput}/>
        <button onClick={this.handlePilotSubmit.bind(this)}>Get Personal File</button>
        <PersonalFile        
        userFile = {this.state.currentUserFile}
        pilotFile = {this.state.currentPilotFile} 
        />
        
      </div>
    )
  }
}

export default App;
