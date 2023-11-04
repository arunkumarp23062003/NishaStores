import React from "react";
import HeroSlider from "react-slick";

//images
import image1 from '../../assets/groceryImage4.jpg'
import image2 from '../../assets/groceryImage1.jpg'
import image3 from '../../assets/groceryImage5.jpg'
import image4 from '../../assets/groceryImage6.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows";

export default function SimpleSlider() {

  const imageStyle = 'w-full h-52 sm:h-64 md:h-72 lg:h-96';

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  var settingslg = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div>
      <div className="pt-28 px-2  md:hidden">
        <HeroSlider {...settings} className="p-0 shadow-xl">
          <div className={imageStyle}>
            <img src={image1} className="w-full h-full" />
          </div>
          <div className={imageStyle}>
            <img src={image2} className="w-full h-full" />
          </div>
          <div className={imageStyle}>
            <img src={image3} className="w-full h-full" />
          </div>
          <div className={imageStyle}>
            <img src={image4} className="w-full h-full" />
          </div>
        </HeroSlider>
      </div>
      <div className="pt-40 md:px-40 lg:px-64 hidden md:block">
        <HeroSlider {...settingslg} className="p-0 hover:scale-105 transistion-all duration-1000 shadow-2xl">
          <div className={imageStyle}>
            <img src={image1} className="w-full h-full rounded-2xl" />
          </div>
          <div className={imageStyle}>
            <img src={image2} className="w-full h-full rounded-2xl" />
          </div>
          <div className={imageStyle}>
            <img src={image3} className="w-full h-full rounded-2xl" />
          </div>
          <div className={imageStyle}>
            <img src={image4} className="w-full h-full rounded-2xl" />
          </div>
        </HeroSlider>
      </div>
    </div>
  );
}