import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
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
                <div className='DisplayBann'>
                    <Image  className="DisplayFlag2" src={Pays1} alt="" />
                    <h1  className="TitleBann">Ma' Noro</h1>
                    <Image  className="DisplayFlag2" src={Pays2} alt="" />
                </div>

         );
    }
}
 
export default Header;