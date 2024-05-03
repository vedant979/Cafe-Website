import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { useNavigate, useLocation } from "react-router-dom";
import { Carousel3 } from '../../components/Carousel3/Carousel3';


import bgImg1 from "../../assets/Sunset/sec-1-Blog1.jpg";
import "./Blog.css";
import "./SLIDER.css"
import { Footer } from '../../components/Footer/Footer';
import Data from "../../JsonFile/BlogCarousel.json"
export const Blog = () => {
  const[value, setValue] = useState();
  useEffect(()=>{
    setValue(Data)
  },[])
  return (
  <div className='main-container'>
    <NavBar  pathname={'/'}/>
    <div className="sub-container1">
      <div className="sub-container1Of1" style={{backgroundImage:`url(${bgImg1})`}}> 
          <div className="left-box">
              <h1>SUNSET</h1>
          </div>
          <div className="right-box">
              <div className="col-1-blog">
                <h1>OUR VISION</h1>
              </div>
              <div className="col-2-blog">
                <p>
                  To create a haven where every cup is a canvas, painting moments of serenity and connection against the backdrop of a setting sun.
                </p>
              </div>
          </div>
      </div>
    </div>
    <div className='wrapper-6of0'>
      <Carousel3 pathname={"/Blog"} name={"vedant"}/>
    </div>
    
          {/* <>
          <div className='slider-xyz'>
                <div className='window'>
                  <div className='cards-wrapper'>
                    {
                      value && value.map((val)=>{
                        return(
                          <>{
                            val.path===location.pathname &&
                          <>
                            <div className='cards123' key={val.id}>
                              <h1>{val.para}</h1>
                            </div>
                          </>
                          }</>
                        )
                      })
                    }
                  </div>
                </div>
          </div> 
          </> */}

    <Footer/>
  </div>
  )
}
