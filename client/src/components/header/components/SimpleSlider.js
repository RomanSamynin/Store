import React, { Component } from "react";
import PrevCard from "./PrevCard";
import PrevCardTop from "./PrevCardTop";
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
      slidesToShow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false
          }
        },
      ]
    };
    return (
      <div className="slider_box">
        <PrevCardTop/>
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
        </Slider>
      </div>

  );
  }
}