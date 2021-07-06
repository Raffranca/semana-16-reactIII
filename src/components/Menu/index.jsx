import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Menu = ()=>{
    return(
        <div>
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="cadastro">Cadastro</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
