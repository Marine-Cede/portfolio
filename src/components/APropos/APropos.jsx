import "./APropos.scss"
import Avatar from '@mui/material/Avatar'
import profileImg from "../../assets/profile_picture.jpg"
export default function APropos(){
    return (
        <div id='a_propos' className="a_propos">
            <Avatar src={profileImg} sx={{ width: 250, height: 250 }} alt="Image de profil"/>
            <section className="a_propos__section">
            Après avoir effectué plusieurs années dans un poste de chargée d'assistance au sein de l'entreprise Inter Mutuelle Assistance (IMA), j'ai pu découvrir le métier de développeuse d'application en discutant avec les créateurs du logiciel utilisé sur
            nos postes.
            Ayant baigné dans le domaine de l'informatique depuis mon adolescence dû à mon
            intérêt pour les jeux vidéos, l'envie de pratiquer ce métier est alors survenu.
            Actuellement en formation BAC +2 développeur WEB via Openclassrooms, je suis à
            la recherche d'une alternance pour parfaire mon apprentissage grâce au BAC +3
            </section>
        </div>
    )
}