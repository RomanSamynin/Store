import React from 'react';
import './PrevCard.sass'

const PrevCard = () => {
    return (
        <div className="prevCards">
            <div className="shopNow">
                <h1>High-Quality Furniture Just For You</h1>
                <h2>Our furniture is made from selected <br/> and 
                best quality materials that are suitable for 
                your dream home</h2>
                <button>Shop Now</button>
            </div>
            <div className="sliderCard">
                <h1>Bohauss</h1>
                <h2>Luxury big sofa 2-seat</h2>
                <h3>Rp 17.000.000</h3>
                <div className="sliderCard_icon MainNext"></div>
            </div>
        </div>
    );
  };
  
  export default PrevCard;