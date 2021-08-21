import React, { Component } from "react";
import PrevCard from "./PrevCard";
import PrevCardTop from "./PrevCardTop";
import Slider from "react-slick";
import slid1 from "./content/slider1.jpg";
import slid2 from "./content/slider2.jpg";
import slid3 from "./content/slider3.jpg";
import slid1_m from "./content/slider1.m.jpg";
import slid2_m from "./content/slider2.m.jpg";
import slid3_m from "./content/slider3.m.jpg";
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
            {(this.props.isMobile) ?
                <img src={slid1_m}></img>
                :
                <img src={slid1}></img>
              }
          </div>
          <div>
            {(this.props.isMobile) ?
                <img src={slid3_m}></img>
                :
                <img src={slid3}></img>
              }
          </div>
          <div>
            {(this.props.isMobile) ?
                <img src={slid2_m}></img>
                :
                <img src={slid2}></img>
              }
          </div>
        </Slider>
      </div>

  );
  }
}