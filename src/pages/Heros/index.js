import React, {useState, useEffect} from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import dados from "../../service/dados";
//import Axios from 'axios';
import './style.css';

const Heros = ()=>{
    //const [personagem, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

//https://superheroapi.com/api/4055034404614169/character-246/powerstats
//`https://superheroapi.com/api/4055034404614169/character-${id}`

    //useEffect(()=>{
        //onst pegaDados = async ()=>{
            //const resposta = await Axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            //console.log(resposta)
            //const dados = await resposta.dados
            //setPersonagem(dados)
            //console.log(dados)
        //}
        //pegaDados()
    //},[])

    useEffect(()=>{
        setFiltroPersonagem(
            dados.filter(dados =>{
                return dados.nome.includes(busca)
            })
        )
    }, [busca])

    return(
        <>
            <Menu/>
            <input type="text" placeholder="Nome do personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(dados=>(
                <div key={dados.id}>
                    <p>{dados.name}</p>
                    <img src={dados.image} alt={dados.name}/>
                </div>
            ))}
            <Footer/>
        </>
    )
}



export default Heros;