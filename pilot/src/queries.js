const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project1db',
    password: 'password',
    port: 5432,
})

//List of all Users
const getUsers = (req, res) => {
    pool.query('SELECT * FROM app_user', (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//List of all Pilots
const getPilots = (req, res) => {
    pool.query('SELECT * FROM pilot', (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
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
//Get a Pilot by Pilot ID
const getPilotById = (req, res) => {
    const user_id = parseInt(req.params.user_id)
    pool.query('SELECT * FROM pilot WHERE user_id = $1', [user_id], (error,results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//Update a Pilots File, given a pilot ID

//Get a list of all flights

//Get list of flights for a given pilot

//Get a single flight, from a list of flights for a given pilot

//delete a flight, from a list of flights, for a given pilot

//update a flight, from a list of flights, for a given pilot

module.exports = {
    getUsers,
    getPilots,
    getUserById,
    getPilotById,

  }