import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Caromenu2.css';

import img1 from "../../assets/images/combo1.jpeg";
import img5 from "../../assets/images/combo1.jpeg";
import img3 from "../../assets/images/combo1.jpeg";
import img4 from "../../assets/images/combo1.jpeg";
import img2 from "../../assets/images/combo1.jpeg";
import img6 from "../../assets/images/combo1.jpeg";

export default function Caromenu2() {
  return (
    <>
      <Swiper
      loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="swiper2"
      >
        <SwiperSlide className='swiper-slide2'><img src={img1} /></SwiperSlide>
        <SwiperSlide className='swiper-slide2'><img src={img2} /></SwiperSlide>
        <SwiperSlide className='swiper-slide2'><img src={img3} /></SwiperSlide>
        <SwiperSlide className='swiper-slide2'><img src={img4} /></SwiperSlide>
        <SwiperSlide className='swiper-slide2'><img src={img5} /></SwiperSlide>
        <SwiperSlide className='swiper-slide2'><img src={img6} /></SwiperSlide>
        
      </Swiper>
    </>
  );
}