function PersonalFile(props){
    var DNIF_Status = 'Allowed to Fly';
    if(props.pilotFile.dnif === true){
        DNIF_Status = 'Not Allowed to Fly'
    }


    return(
        <div>
            <input type="text" onChange={props.onPilotInput}/>
            <button onClick={props.onPilotSubmit}>Get Personal File</button>
            <h2>User Profile</h2>
            <p>Name: {props.userFile.first_name} {props.userFile.last_name}</p>
            <p>Username: {props.userFile.username} </p>
            <p>Email: {props.userFile.email_address}</p>
            <p>Workcenter: {props.userFile.work_center_id}</p>
            <h2>Pilot Profile</h2>
            <p>DNIF Status: {DNIF_Status}</p>
            <p>Qualification: {props.pilotFile.qualification}</p>
            <p>Flight Hours: {props.pilotFile.flying_hours}</p>
        </div>
    )
}

export default PersonalFile;