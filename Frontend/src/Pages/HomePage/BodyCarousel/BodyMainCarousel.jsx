import React, { Component, useRef } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextBodyArrow, PrevBodyArrow } from "./BodyArrows";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const BodyMainCarousel = (props) => {

  const MediumView = () => {

    const navigate = useNavigate();

    const arrowRef = useRef(null);

    const Title = props.Title;
    const heading = props.heading;

    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const sliderImageStyleLg = `w-52 h-30 rounded-full hover:scale-105 transistion-all duration-700 py-2 cursor-pointer`;

    //handle the onclickButton
    const handleOnClick = ({ item }) => {
      navigate(`/item/${item.Title}`,{state:item});
    }

    return (
      <div className="hidden md:block px-4 pt-8 lg:w-4/5 md:px-10 lg:mx-auto">
        <h2 className="py-2 font-bold lg:text-lg capitalize">{heading}</h2>
        <div className="relative">
          <Slider ref={arrowRef} {...settings} >
            {Title.map((item, index) => (
              <div key={index} className="px-2">
                <img src={item.ImageUrl} alt={item.Title} className={sliderImageStyleLg} onClick={() => handleOnClick({item})} />
              </div>
            ))}
          </Slider>
          <Button>
            <button onClick={() => arrowRef.current.slickPrev()} className="back">{<BiLeftArrow className='ml-1' />}</button>
            <button onClick={() => arrowRef.current.slickNext()} className='next'>{<BiRightArrow className='ml-1' />}</button>
          </Button>
        </div>
      </div>
    )
  }

  const MobileView = () => {

    const Title = props.Title;
    const heading = props.heading;

    const navigate = useNavigate();

    const handleOnclick = ({item}) => {
      navigate(`/item/${item.Title}`,{state:item});
    }

    return (
      <div className="p-4 md:hidden">
        <h2 className="py-2 font-bold lg:text-lg capitalize">{heading}</h2>
        <div className="flex overflow-x-auto gap-5 pb-2">
          {Title.map((item, index) => (
            <img key={index} src={item.ImageUrl} alt={item.Title} className="w-20 h-20 sm:w-40 sm:h-40 rounded-full cursor-pointer" onClick={() => handleOnclick({item})} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <MobileView />
      <MediumView />
    </div>
  )
}

const Button = styled.div`

    button {
        width: 2rem;
        height: 2rem;
        background-color: gray;
        cursor: pointer;
        color: black;
        border: none;
        position: absolute;
        top: 35%;
    }

    .back { 
        left: 0;
     }

     .next {
        right:0;
     }
`


export default BodyMainCarousel;
