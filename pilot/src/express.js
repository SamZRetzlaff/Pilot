const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dummyUser = JSON.parse(fs.readFileSync('./dummyUser.json', 'utf-8'))
const dummyPilot = JSON.parse(fs.readFileSync('./dummyPilot.json', 'utf-8'))

//List of all Users
app.get('/Users', (req,res) =>{
    res.send(dummyUser)
})
//List of all Pilots
app.get('/Pilots', (req,res) =>{
    res.send(dummyPilot)
})
// //Get a User by Username
// app.get('/Users/:Username', (req,res) =>{
    
// })
// //Get a Pilot by Pilot ID
// app.get('/Pilots/:Pilot_ID', (req,res) =>{
    
// })
// //Update a Pilots File, given a pilot ID
// app.patch('/Pilots/:Pilot_ID', (req,res) =>{
    
// })
// //Get a list of all flights
// app.get('/Flights', (req,res) =>{
    
// })
// //Get list of flights for a given pilot
// app.get('Flights/:Pilot_ID', (req,res) =>{
    
// })
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