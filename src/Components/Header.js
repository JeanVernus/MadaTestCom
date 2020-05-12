import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';
import Banniere from '../Assets/Flag.png';
import Pays1 from '../Assets/Pays1.png';
import Pays2 from '../Assets/Pays2.png';
import '../CSS/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Segment>
                <div className='DisplayBann'>
                    <Image  className="DisplayFlag2" src={Pays1} alt="" />
                    <Image  className="DisplayFlag1" src={Banniere} alt="" />
                    <Image  className="DisplayFlag2" src={Pays2} alt="" />
                </div>
            </Segment>
         );
    }
}
 
export default Header;