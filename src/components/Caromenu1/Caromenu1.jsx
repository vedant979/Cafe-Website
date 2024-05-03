import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Caromenu1.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import img1 from "../../assets/Sunset/Burger&Sandwich.jpeg";
import img5 from "../../assets/Sunset/Chinese.jpeg";
import img3 from "../../assets/Sunset/deserts.jpeg";
import img4 from "../../assets/Sunset/maincourse.jpeg";
import img2 from "../../assets/Sunset/salads.jpeg";
import img6 from "../../assets/Sunset/sides.jpeg";
import img7 from "../../assets/Sunset/Starters.jpeg";
import img8 from "../../assets/Sunset/valueCombo.png";

export default function Caromenu1() {
  return (
    <>
      <Swiper 
      loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 10,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
          
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 2,
          },
          '@1.00': {
            slidesPerView: 3,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card-img">
              <img src={img1} />
            </div>
            <div className="card-txt">
              <h1>BURGER & SANDWICHES</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img2} />
            </div>
            <div className="card-txt">
              <h1>CHINESE CUSINE</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img3} />
            </div>
            <div className="card-txt">
              <h1>STARTERS</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img4} />
            </div>
            <div className="card-txt">
              <h1>SIDES</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img5} />
            </div>
            <div className="card-txt">
              <h1>SALADS</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img6} />
            </div>
            <div className="card-txt">
              <h1>DESSERTS / ICE-CREAM</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img7} />
            </div>
            <div className="card-txt">
              <h1>MAIN COURSE</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-img">
              <img src={img8} />
            </div>
            <div className="card-txt">
              <h1>value combo</h1>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}