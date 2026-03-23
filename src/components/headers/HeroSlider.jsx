import React from 'react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';
export default function heroSlider() {
  return (
    
    <>
    <div className="hero">
      <div className="container">
           <Swiper modules={[Pagination, Autoplay]} className="mySwiper" spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}

        >
        <SwiperSlide>
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox <br />360 controller</h3>
            <p>Windos xp / windows 10 / windows 11</p>
            <li className="btn"><Link to={'/'} >Shop Now </Link></li>
          </div>
          <img src="src/img/banner_Hero1.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox <br />360 controller</h3>
            <p>Windos xp / windows 10 / windows 11</p>
              <li className="btn"><Link to={'/'} >Shop Now </Link></li>
          </div>
          <img src="src/img/banner_Hero2.jpg" alt="banner" />
        </SwiperSlide>
       
       <SwiperSlide>
          <div className="content">
            <h4>Introducing the new</h4>
            <h3>Microsoft Xbox <br />360 controller</h3>
            <p>Windos xp / windows 10 / windows 11</p>
               <li className="btn"><Link to={'/'} >Shop Now </Link></li>
          </div>
          <img src="src/img/banner_Hero3.jpg" alt="banner" />
        </SwiperSlide>
       
       
        
      
      </Swiper>
      </div>
    </div>
       
    </>
  )
}
