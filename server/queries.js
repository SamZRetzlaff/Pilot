const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'mx_schedule',
    password: 'admin',
    port: 5432,
})

//Get a User by Username
const getUserById = (req, res) => {
    const user_id = parseInt(req.params.user_id)
    pool.query('SELECT * FROM app_user WHERE user_id = $1', [user_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Get a Pilot by User ID
const getPilotById = (req, res) => {
    const user_id = parseInt(req.params.user_id)
    pool.query('SELECT * FROM pilot WHERE user_id = $1', [user_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Update a Pilots File, given a user ID

const updateFlightHours = (req,res) =>{
    const flying_hours = parseInt(req.body.flying_hours)
    const pilot_id = parseInt(req.body.pilot_id)
    pool.query('UPDATE pilot SET flying_hours = $1 WHERE pilot_id = $2', [flying_hours, pilot_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

//Get list of flights for a given pilot
const getFlightsByPilotId = (req, res) => {
    const pilot_id = parseInt(req.params.pilot_id)
    pool.query('SELECT * FROM flight WHERE pilot_id =$1', [pilot_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Get a single flight, from a flight ID
const getFlightByFlightId = (req, res) => {
    const flight_id = parseInt(req.params.flight_id)
    pool.query('SELECT * FROM flight WHERE flight_id =$1', [flight_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//delete a flight, from a list of flights, for a given pilot

//update a flight, from a list of flights, for a given pilot
const updateTakeoffTime = (req,res) =>{
    const actual_takeoff_timestamp = parseInt(req.body.actual_takeoff_timestamp)
    const flight_id = parseInt(req.body.flight_id)
    console.log(actual_takeoff_timestamp)
    console.log(flight_id)
    pool.query('UPDATE flight SET actual_takeoff_timestamp = $1 WHERE flight_id = $2', [actual_takeoff_timestamp, flight_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
module.exports = {
    getUserById,
    getPilotById,
    getFlightsByPilotId,
    updateFlightHours,
    getFlightByFlightId,
    updateTakeoffTime
  }