import "./Competences.scss"
import skills from "../../../public/data/competences.json"
export default function Competences(){
    return (
        <div id="competences" className="competences">
            <h2>Mes compétences</h2>
            <div className="competences__container">
                <ul className="competences__container__list">
                    {skills.map(skill => {
                        return <li className="competences__container__list__item" key={skill.name}>
                            <i className={skill.logo}></i>
                            <p>{skill.name}</p>
                        </li>
                    })}
                    
                </ul>
            </div>
        </div>
    )
}