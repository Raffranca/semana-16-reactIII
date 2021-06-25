import { Link } from "react-router-dom";
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <ul>
                <li>
                    <Link>Linkedin</Link>
                </li>
                <li>
                    <Link>GitHub</Link>
                </li>
            </ul>

        </footer>
    )
}

export default Footer;