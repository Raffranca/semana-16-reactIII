import React from 'react';
import './style.css';
import Img from '../../assets/ibura.jpg';

const Banner = ()=>{
    return(
        <div className="main">
            <div>
                <h1>Acha Aqui Ibura</h1>
            </div>
            <img src={Img} alt='Logo pagina'/>
        </div>
    )
}

export default Banner;