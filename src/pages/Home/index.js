import React, {useState, useEffect} from "react";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
//import dados from "../../service/dados";
//import Axios from 'axios';


const Home = ()=>{
    const [personagens, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

//https://superheroapi.com/api/4055034404614169/character-246/powerstats
//`https://superheroapi.com/api/4055034404614169/character-${id}`
//https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados.results))
        },[])  

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem =>{
                return personagem.name.toLowerCase().includes(busca)
            })
        )
    }, [busca, personagens])

    return(
        <>
            <Banner/>
            <Menu/>
            <input type="text" placeholder="Nome do personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=>(
                <div key={personagem.id}>
                    <div className="card">
                        <div className="discricao">
                            <p>{personagem.name}</p>
                            <p>{personagem.species}</p>
                        </div>
                        <img className="img" src={personagem.image} alt={personagem.name}/>
                    </div>
                </div>
            ))}
            <Footer/>
        </>
    )
} 


export default Home;