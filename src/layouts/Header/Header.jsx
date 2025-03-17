import "./Header.scss"
import Typical from 'react-typical'
import logo from "../../assets/codage.png"

export default function Header(){
    return (
        <header className="navigation">
            <nav>
                <a href="#a_propos">A propos</a>
                <a href="#competences">Mes compétences</a>
                <a href="#projets">Mes projets</a>
                <a href="#parcours">Mon parcours</a>
            </nav>
            <div className="navigation__me">
                <img src={logo} alt="Logo de code"></img>
                <h1>Marine CEDE</h1>
                <Typical steps={['Développeuse ', 1000]} loop={Infinity} wrapper="p" />
            </div>
        </header>
    )
}