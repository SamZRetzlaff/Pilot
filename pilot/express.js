const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dummyUser = JSON.parse(fs.readFileSync('./dummyUser.json', 'utf-8'))
const dummyPilot = JSON.parse(fs.readFileSync('./dummyPilot.json', 'utf-8'))

//List of all Users

//List of all Pilots

//Get a User by Username

//Get a Pilot by Pilot ID



