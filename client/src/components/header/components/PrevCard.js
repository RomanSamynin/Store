import React from 'react';
import './PrevCard.sass'

const PrevCard = () => {
    const scrollToProducts = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    };
    return (
        <div onClick={scrollToProducts} className="sliderCard">
            <h1>Bohauss</h1>
            <h2>Luxury big sofa 2-seat</h2>
            <h3>Rp 17.000.000</h3>
            <div className="sliderCard_icon MainNext"></div>
        </div>
    );
  };
  
  export default PrevCard;