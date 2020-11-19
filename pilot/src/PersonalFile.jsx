function PersonalFile(props){
    return(
        <div>
            <input type="text" onChange={props.onPilotInput}/>
            <button onClick={props.onPilotSubmit}>Get Personal File</button>
        </div>
    )
}

export default PersonalFile;