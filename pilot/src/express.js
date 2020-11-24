const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()
const database = require('./queries')
const port = 3001
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//Get a User by Username
app.get('/users/:user_id', database.getUserById)
//Get a Pilot by Pilot ID
app.get('/pilots/:user_id', database.getPilotById)
//Update a Pilots File, given a pilot ID
app.post('/pilots/:pilot_id', database.updateFlightHours)
// //Get list of flights for a given pilot
app.get('/flight/:pilot_id', database.getFlightsByPilotId)
// //Get a single flight, from a list of flights for a given pilot
// app.get('Flights/:Pilot_ID/:Flight_ID', (req,res) =>{
    
// })
// //delete a flight, from a list of flights, for a given pilot
// app.delete('Flights/:Pilot_ID/:Flight_ID', (req,res) =>{
    
// })
// //update a flight, from a list of flights, for a given pilot
// app.patch('Flights/:Pilot_ID/:Flight_ID', (req,res) =>{
    
// })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))