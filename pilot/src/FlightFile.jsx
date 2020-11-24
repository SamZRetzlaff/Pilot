function FlightFile(props){
   
  
    return(
        <div>
            <h3>Flight ID: {props.flightFile.flight_id}</h3>
    <p>Aircraft ID: {props.flightFile.aircraft_id}</p>
    <p>Call Sign: {props.flightFile.call_sign}</p>
    <p>Scheduled Takeoff: {props.flightFile.scheduled_takeoff_timestamp}</p>
    <p>Scheduled Landing: {props.flightFile.scheduled_landing_timestamp}</p>
    <p>Actual Takeoff: {props.flightFile.actual_takeoff_timestamp}</p>
    <input type="text" placeholder="Takeoff Timestamp" onChange={props.onTakeoffChange}></input>
                 <button type="button" onClick ={props.onTakeoffUpdate}>Update Actual Takeoff</button>
    <p>Actual Landing: {props.flightFile.actual_landing_timestamp}</p>
    <input type="text" placeholder="Landing Timestamp" onChange={props.onLandingChange}></input>
                 <button type="button" onClick ={props.onLandingUpdate}>Update Actual Landing</button>
        </div>
    )
}

export default FlightFile;