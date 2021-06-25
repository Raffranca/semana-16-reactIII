import Img from '../../assets/linkedin-icon-2.svg';
import IMG from '../../assets/images.png';
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <ul>
                <li>
                    <a className="" href="https://www.linkedin.com/in/rafaela-fran%C3%A7aa/" target="_blank"><img src={Img}alt="logo linkedin" className="imagem"/></a>
                    
                </li>
                <li>
                    <a className="" href="https://github.com/Raffranca" target="_blank"><img src={IMG} alt="logo github" className="imagem"/></a>
                </li>
            </ul>
                <p>Desenvolvido durante a Reprograma por Rafaela França</p>
            
        </footer>
    )
}

export default Footer;