import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import "./Parcours.scss"
export default function Parcours(){
    return (
        <div className="parcours" id="parcours">
            <h2>Mon parcours</h2>
            <VerticalTimeline className="vertical-responsive">
                <VerticalTimelineElement   className="vertical-timeline-element--work "
                    contentStyle={{ background: '#236AA4', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: '#236AA4', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">Bac +3 Concepteur Developpeur d'application</h3>
                <h4 className="vertical-timeline-element-subtitle">Niort à l'ENI</h4>
                <p>
                Actuellement en recherche d'alternance pour ce diplôme, je souhaite continuer mon apprentissage en accumulant encore plus de connaissances. Couplé avec une alternance en entreprise. Cela pourrait être extêmement formateur.
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024 - 2025"
                    iconStyle={{ background: '#236AA4', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bac +2 Développeur Web</h3>
                    <h4 className="vertical-timeline-element-subtitle">Niort, Openclassroom</h4>
                    <p>
                    J'ai appris les rudiement du développement Web, en développant avec des technologies comme le React ou le NodeJS. J'ai pu développer un certains nombre de projets professionnalisant.
                    </p>
                </VerticalTimelineElement>    
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - 2024"
                    iconStyle={{ background: '#236AA4', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Chargée d'assistance</h3>
                    <h4 className="vertical-timeline-element-subtitle">Niort, IMA</h4>
                    <p>
                    Chargée d'assistance dans le pôle médical internationnale, je gérais les rapatriements sanitaires, le mandatement d'ambulance ou d'avion sanitaire pour les personnes malades ou blessés au quatre coins du monde.
                    </p>
                </VerticalTimelineElement>    
            </VerticalTimeline>
        </div>
    )
}