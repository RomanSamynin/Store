import React from 'react';
import './footer.sass';
import img_1 from './content/Rectangle41.jpg';
import img_2 from './content/Rectangle42.jpg';
import img_3 from './content/Rectangle43.jpg';
import img_4 from './content/Rectangle44.jpg';
import img_5 from './content/Rectangle45.jpg';
import img_6 from './content/Rectangle36.jpg';
import img_7 from './content/Rectangle37.jpg';
import img_8 from './content/Rectangle38.jpg';
import img_9 from './content/Rectangle39.jpg';



const Footer = () => {
    return (
        <div className="wrapper">
               <div  className="galleryWrap">
                   <img className="img_1" src={img_1}></img>
                   <img className="img_2" src={img_2}></img>
                   <img className="img_3" src={img_3}></img>
                   <img className="img_4" src={img_4}></img>
                   <img className="img_5" src={img_5}></img>
                   <img className="img_6" src={img_6}></img>
                   <img className="img_7" src={img_7}></img>
                   <img className="img_8" src={img_8}></img>
                   <img className="img_9" src={img_9}></img>
               </div>
        </div>
    )
}

export default Footer;