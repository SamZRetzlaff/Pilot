function UpcomingFlightsFile(props){
   
    let allFlights = props.scheduledFlights.map(flight => (
        <li>
            Flight ID: {flight.flight_id}
            <br/>
            Upcoming Flight for {props.userFile.first_name} {props.userFile.last_name} in Aircraft  #{flight.aircraft_id}
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
            <ul>
                {allFlights}
            </ul>
           
        </div>
    )
}

export default UpcomingFlightsFile;