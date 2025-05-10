
import APropos from "../../components/APropos/APropos";
import Competences from "../../components/Competences/Competences";
import Parcours from "../../components/Parcours/Parcours"
import MesProjets from "../../components/MesProjets/MesProjets"
import "./Home.scss"

export default function Home(){
    return (
        <div className="home">
            <APropos/>
            <Competences/>
            <MesProjets/> 
            <Parcours/>
        </div>
    )
}