import React, { useState } from 'react'
import "./Carousel.css";
import CarouselData from "../../JsonFile/Carousel.json"
import { Card } from '../Card/Card';
import nextBtn from "../../assets/Sunset/nextArrow.svg"
import prevBtn from "../../assets/Sunset/prevArrow.svg";
export const Carousel = () => {
    const[count, setCount] =useState(0);
    var imageNo = 0;

    var slider = document.getElementsByClassName("slider");
    function handleClickPrev(){
        if(imageNo<1){
            imageNo=4;
        }else{
            imageNo -= 1;
        }
        slider[0].style.transform="translateX(" + (imageNo)*(-14) + "%)";
    }
    function handleClickNext(){
        if(imageNo<4){
            imageNo+=1;
        }else{
            imageNo = 0;
        }
        slider[0].style.transform="translateX(" + (imageNo)*(-14) + "%)";
    }

  return (
<>
<div className="sub-right-container">

<div className="carousel-container">
    <div className="control-btns">
        <button className="btn-1" id="prev"onClick={handleClickPrev} ><img src={prevBtn}></img></button>
        <button className="btn-1" id="next" onClick={handleClickNext} ><img src={nextBtn}></img></button>
    </div>
    <div className="carousel-heading">
        <p>We Are Known for :-</p>
    </div>
    <div className="slider-wrapper">
        <div className="slider">
            { CarouselData.map((x)=>{
                // console.log(x.id);
                return(
                    <Card key={x.id} image={x.image} heading={x.heading} para={x.para} />
                )
            })

            }
            </div>
    </div>

</div>
</div>
<script src='./Carouseljs.js'></script>
</>
  )
}
