function PersonalFile(props){
    var DNIF_Status = 'Allowed to Fly';
    if(props.pilotFile.dnif === true){
        DNIF_Status = 'Not Allowed to Fly'
    }

    return(
        <div>
            <h2>User Profile</h2>
            <p>Name: {props.userFile.first_name} {props.userFile.last_name}</p>
            <p>Username: {props.userFile.username} </p>
            <p>Email: {props.userFile.email_address}</p>
            <p>Workcenter ID: {props.userFile.work_center_id}</p>
            <h2>Pilot Profile</h2>
            <p>DNIF Status: {DNIF_Status}</p>
            <p>Qualification: {props.pilotFile.qualification}</p>
            <p>Flight Hours: {props.pilotFile.flying_hours}   
                 <input type="text" placeholder="New Total Flight Hours" onChange={props.onFlightHoursChange}></input>
                 <button type="button" onClick ={props.onFlightHoursUpdate}>Update Flying Hours</button>
                
            </p>
            
        </div>
    )
}

export default PersonalFile;