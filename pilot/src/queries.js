const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project1db',
    password: 'password',
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
//Get a single flight, from a list of flights for a given pilot

//delete a flight, from a list of flights, for a given pilot

//update a flight, from a list of flights, for a given pilot

module.exports = {
    getUserById,
    getPilotById,
    getFlightsByPilotId,
  }