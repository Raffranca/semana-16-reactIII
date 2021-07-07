import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.css';  

const Cadastro = ()=>{
    return(
        <div>
            <Menu/>
            <p>Contribua com a comunidade faça seu cadastro e divulgue sua marca</p>
            <form action="" className="form">
                <label>Nome da Empresa*</label>
                <input type="text" required placeholder="Digite o nome da empresa" />
                <label>Nome Proprietario</label>
                <input type="text" placeholder="Digite o nome do proprietario" />
                <label>Ramo de atuação*</label>
                <select name="lista" className="lista" required>
                    <option value="vazio"> </option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="servicos">Serviços</option>
                    <option value="vetuario">Vestuario</option>
                </select>
                
                <label htmlFor="">Imagem*</label>
                <input type="url" required placeholder="https://site/imagem/"/>
                <label htmlFor="">Instagram*</label>
                <input type="url" required placeholder="https://www.instagram.com/user/"/>
                <label htmlFor="">Telefone</label>
                <input type="tel" placeholder="(81)9.9999-9999" />
                <input type="submit" />
            </form>
            <Footer/>
        </div>
    )
}

export default Cadastro;