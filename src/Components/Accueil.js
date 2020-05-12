import React, {Component} from 'react';
import Nouveautes from './Nouveaute'

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    render() { 
        return (
            <div> 
                <div>Nouveautés</div>
                <Nouveautes />
            </div>
        );
    }
}
 
export default Accueil;