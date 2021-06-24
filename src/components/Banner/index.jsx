import React from 'react';
import './style.css';
import Img from '../../assets/imagem.svg';

const Banner = ()=>{
    return(
        <div className="main">
            <div>
                <h1>Oi, Mainha</h1>
                <p>Treinando React com react-router-dom e axios</p>
            </div>
            <img src={Img} alt='Logo pagina'/>
        </div>
    )
}

export default Banner;