const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()
const database = require('./queries')
const port = 8083
app.use(cors())

app.options('*', cors()) //LAST ADDED! 

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
app.get('/flight/singleflight/:flight_id', database.getFlightByFlightId)
// //delete a flight, from a list of flights, for a given pilot
// app.delete('Flights/:Pilot_ID/:Flight_ID', (req,res) =>{
    
// })
// //update a flight, from a list of flights, for a given pilot
app.post('/flight/singleflight/:flight_id', database.updateTakeoffTime)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))