import React from 'react';
import './PrevCard.sass'

const PrevCardTop = () => {
    const scrollToProducts = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    };
    return (
        <div className="shopNow">
            <h1>High-Quality Furniture Just For You</h1>
            <h2>Our furniture is made from selected <br/> and 
            best quality materials that are suitable for 
            your dream home</h2>
            <button onClick={scrollToProducts}>Shop Now</button>
        </div>
    );
  };
  
  export default PrevCardTop;