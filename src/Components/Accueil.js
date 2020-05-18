import React, {Component} from 'react';
import Nouveautes from './Nouveaute';
import '../CSS/Accueil.css';

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    render() { 
        return (
            <div className="FondAccueil"> 
                <div className="TitleNews">Nouveautés</div>
                <br />
                <div className="TextPrezNew">A voir texte de présentation des nouveautés</div>
                <br />
                <Nouveautes />
                <br />
                <div className="TextPrezNew">A voir texte de présentation des nouveautés</div>
            </div>
        );
    }
}
 
export default Accueil;