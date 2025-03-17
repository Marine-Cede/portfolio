import "./CardProjets.scss"
export default function CardProjets({projet, }){
    return (
        <div className="card">
            <img src={`./imgProjets/${projet.id}`} alt={projet.altImg} className="card__image"></img>
            <h2 className="card__title">{projet.name}</h2>
            <p className="card__description">{projet.description}</p>
            <a href={projet.url} className="card__url">Cliquez ici pour le voir sur Github ! </a>
            <div className="card__tags">
                {projet.tags.map(tag => {
                    return (               
                        <p key={tag}>{tag}</p>                
                    )
                })}
            </div>
        </div>
    )
}