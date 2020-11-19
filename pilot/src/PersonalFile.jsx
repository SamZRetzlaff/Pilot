function PersonalFile(props){
    var DNIF_Status = 'Allowed to Fly';
    if(props.pilotFile.DNIF === true){
        DNIF_Status = 'Not Allowed to Fly'
    }


    return(
        <div>
            <input type="text" onChange={props.onPilotInput}/>
            <button onClick={props.onPilotSubmit}>Get Personal File</button>
            <h2>User Profile</h2>
            <p>Name: {props.userFile.First_Name} {props.userFile.Last_Name}</p>
            <p>Username: {props.userFile.Username} </p>
            <p>Email: {props.userFile.Email_Address}</p>
            <p>Workcenter: {props.userFile.Workcenter_ID}</p>
            <h2>Pilot Profile</h2>
            <p>DNIF Status: {DNIF_Status}</p>
            <p>Qualification: {props.pilotFile.Qualification}</p>
            <p>Flight Hours:{props.pilotFile.Flying_Hours}</p>


        </div>
    )
}

export default PersonalFile;