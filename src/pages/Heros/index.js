import React, {useState, useEffect} from "react";

const Heros = ()=>{
    const [personagens, setPersonagem] = useState([])

//https://superheroapi.com/api/4055034404614169/character-246/powerstats
//`https://superheroapi.com/api/4055034404614169/character-${id}`

    return(
        <>
            <input type="text" placeholder="Nome do personagem"/>
        </>
    )
}



export default Heros;