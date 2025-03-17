import "./MesProjets.scss"
import projets from "../../../public/data/projets.json"
import CardProjets from "../CardProjets/CardProjets"

export default function MesProjets(){
    return (
        <div id="projets" className="projets">
            <h2>Mes projets</h2>
            <div className="projets__cards">
                {projets.map(projet => {
                    return <CardProjets projet={projet} key={projet.name} />
                })}
            </div>
        </div>
    )
}