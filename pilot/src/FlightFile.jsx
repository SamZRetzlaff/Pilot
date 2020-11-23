function FlightFile(props){
    let allFlights = props.scheduledFlights.map(flight => (
        <li>
            Upcoming Flight for {props.userFile.first_name} {props.userFile.last_name} in Aircraft  #{flight.aircraft_id}
            <button type="button" >View Flight Details</button>
            <br/>
            Scheduled Takeoff: {flight.scheduled_takeoff_timestamp} 
            <br/>
            Scheduled Landing: {flight.scheduled_landing_timestamp}
            <br/>
            .
        </li>
    ))
  
    return(
        <div>
            <h2>Scheduled Flights</h2>
            <ol>
                {allFlights}
            </ol>
        </div>
    )
}

export default FlightFile;