import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const teamStyle={
        border:'2px solid crimson',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd} style={{margin:'10px'}}>Add</button>
            <button onClick={handleRemove} style={{margin:'10px'}}>Remove</button>
        </div>
    )
}