import React, {useState, useEffect} from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Axios from 'axios';
import './style.css';

const Heros = ()=>{
    const [personagens, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

//https://superheroapi.com/api/4055034404614169/character-246/powerstats
//`https://superheroapi.com/api/4055034404614169/character-${id}`

    //useEffect(()=>{
        //const pegaDados = async ()=>{
            //const resposta = await Axios.get('https://app.microenv.com/backend/key/9441b2a9c115ecf9639eb7/rest/adm/hora-da-aventura')
            //console.log(resposta)
            //const dados = await resposta.characters
            //setPersonagem(dados)
            //console.log(dados)
        //}
        //pegaDados()
    //},[])

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem=>{
                return personagem.name.includes(busca)
            })
        )
    }, [busca, personagens])

    return(
        <>
            <Menu/>
            <input type="text" placeholder="Nome do personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=>(
                <div>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt={personagem.name}/>
                </div>
            ))}
            <Footer/>
        </>
    )
}



export default Heros;