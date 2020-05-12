import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import Facebook from '../Assets/facebook.png';
import Insta from '../Assets/Instagram.jpeg';
import Twitter from '../Assets/twitter.png';
import '../CSS/Footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Segment>
                <div className="DisplayFooter">
                    <Image className="LogoSize" src ={Facebook} alt =""/>
                    <Image className="LogoSize" src ={Twitter} alt =""/>
                    <Image className="LogoSize" src ={Insta} alt =""/>
                </div>
            </Segment>
         );
    }
}
 
export default Footer;