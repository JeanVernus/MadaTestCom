import React, { Component } from 'react';
import Nouveaute from '../Assets/Nouveauté.png';
import ImageGallery from 'react-image-gallery';
import { Image } from 'semantic-ui-react';
import News1 from '../Assets/News1.png';
import News2 from '../Assets/News2.png';
import News3 from '../Assets/News3.png';
import News4 from '../Assets/News4.png';
import Solde from '../Assets/Solde.png';
import '../CSS/Nouveautes.css'

class Nouveautes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image1: News1,
            image2: News2,
            image3: News3,
            image4: News4,
          }
        }
      
        slideShow() {
      
          const { image1, image2, image3, image4 } = this.state;
          const images = [
            {
              original: image1,
            },
            {
              original: image2,
            },
            {
              original: image3,
            },
            {
              original: image4,
            },
          ]
          return (
            <div >
              <Image className="ImageNews">
                <ImageGallery
                  autoPlay={true}
                  items={images}
                  showThumbnails={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  disableThumbnailScroll={true}
                  showNav={true}
                />
              </Image>
            </div>
          );
        }
      
        render() {
          return (
            <div>
              <div className='displayMarginResto'>
                <Image className="LogoNew1" src= {Solde} alt= ''/>
                {this.slideShow()}
                <Image className="LogoNew2" src= {Nouveaute} alt= ''/>
              </div>
            </div>
          )
        }
      }
 
export default Nouveautes;