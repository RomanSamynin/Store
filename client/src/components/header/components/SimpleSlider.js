import React, { Component } from "react";
import PrevCard from "./PrevCard";
import Slider from "react-slick";
import slid from "./content/slider1.jpg"
import "./SimpleSlider.sass"

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "110px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div className="slider_box">
        <PrevCard/>
        <Slider {...settings}>
          <div>
            <img src={slid}></img>
          </div>
          <div>
            <img src={slid}></img>
          </div>
          <div>
            <img src={slid}></img>
          </div>
          <div>
            <img src={slid}></img>
          </div>
          <div>
            <img src={slid}></img>
          </div>
          <div>
            <img src={slid}></img>
          </div>
        </Slider>
      </div>
    );
  }
}