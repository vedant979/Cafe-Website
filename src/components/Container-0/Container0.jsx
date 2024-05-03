import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import  "../NavBar/NavBar.css";
import "./Container0.css"
import { NavBar } from '../NavBar/NavBar';
import {Carousel} from "../Carousel/Carousel"
import sec2img from "../../assets/Sunset/section2-1.png";
import sec5Img from "../../assets/Sunset/section-5of0.jpg";
import chefImg from "../../assets/Sunset/section2-1.png"
import bgImg from "../../assets/Sunset/section-5of0.jpg";
import { Footer } from '../Footer/Footer';
import { Carousel2 } from '../Carousel2/Carousel2';
import { Carousel3 } from '../Carousel3/Carousel3';

export const Container0 = (props) => {

const[windowSize, setWindowSize] = useState(false);

if(window.innerWidth<768){
    console.log("yes")
}

window.addEventListener("onChange", ()=>{
    console.log(window.innerWidth)
})
  return (
    <>
      <section className="container-0" id="bg-img-1">
        <NavBar user={props.user} pathname={"/"}/>
        <section className="sub-container-2of0">
          <div className="sub-left-container">
                      <div className="top-sub-container">
                          <div className="wrapper">
                              <div className="wrapper-heading">
                                  <h1>Welcome</h1>
                              </div>
                              <div className="wrapper-para">
                                  <p>Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite Unveils a Symphony of Flavors and Moments.</p>
                              </div>
                          </div>
                      </div>
                      <div className="bottom-sub-container">
                          <div className="container-wrapper">
                              <div className="wrapper-heading">
                                  <h1>Gateway to Serenity, Culinary Delights</h1>
                              </div>
                              <div className="wrapper-para">
                                  <p>Step into a World Where Ambiance, Flavor, and Warmth Converge—A Haven Where Every Visit Feels Like Coming Home.</p>
                              </div>
                          </div>

                          <div className="wrapper-btn">
                              <button className="wrapper-btn-1">Order Now</button>
                          </div>
                      </div>
          </div>
          <Carousel/>
        </section>
      </section>


      <section className="sub-container-3of0">
            <div className="sub-left-container">
                <div className="wrapper">
                    <div className="container-1">
                        <p>ABOUT US</p>
                    </div>
                    <div className="container-2">
                        <p>The story behind sunset ...</p>
                    </div>
                    <div className="container-img">
                        <img src={chefImg}  className="size"></img>
                    </div>
                    <div className=" mobile-view-para">
                        <p>Welcome to Sunset Café, where our journey began with Chef André's bold decision to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection.</p>
                    </div>
                    <div className="container-3 laptop-view-para">
                        <p>Welcome to Sunset Café, where our journey began with Chef André's bold decision to depart from the world of haute cuisine and create a culinary sanctuary rooted in simplicity and heartfelt connection. 
                        <br></br>    
                        Inspired by a chance encounter with a charming café bathed in the warm glow of twilight, Chef André envisioned a place where genuine hospitality and exceptional flavors intertwine. At Sunset Café, each dish is a reflection of Chef André's dedication to crafting culinary experiences that nourish both body and soul.</p>
                    </div>
                    <div className="container-4">
                        <button className="btn-1">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="sub-right-container">
                <div className="wrapper">
                    <div className="container-1">
                        <img src={sec2img} alt=""></img>
                    </div>
                </div>
            </div>
      </section> 

        <Carousel2/>

        <section className="sub-container-5of0" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="wrapper-5of0">
                <div className="left-box-5of0">
                    <img src={sec5Img} ></img>
                </div>
                <div className="right-box-5of0">
                    <div className="row-1">
                        <p>Reservation</p>
                    </div>
                    <div className="row-2">
                        <p>BOOK A TABLE ONLINE</p>
                    </div>
                    <div className="row-3">
                        <div className="col-1">
                            <input type="text" placeholder="Your Name"></input>
                        </div>
                        <div className="col-2">
                            <input type="email" placeholder="Your Email"></input>
                        </div>
                    </div>
                    <div className="row-4">
                        <div className="col-1">
                            <input type="text" placeholder="Date & time"></input>

                        </div>
                        <div className="col-2">
                            <input type="text" placeholder="No. of people"></input>
                        </div>
                    </div>
                    <div className="row-5">
                        <div className="row-1">
                            <input type="text" placeholder="Special Request"></input>
                        </div>
                        <div className="row-2">
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`sub-container-6of0 `}>
            <div className={`wrapper-6of0 ${location.pathname==="/Blog" && "blogMobileViewForCarousel"}`} style={{height:"100%"}} >
                <Carousel3 pathname={"/"}/>
                <div className="col-2">
                    <div className="wrapper-col2">
                        <div className="row-1">
                            <p>Subscribe To Newsletter</p>
                            <p>and Get -20% off</p>
                        </div>
                        <div className="row-2">
                            <p>Your Gateway to Serenity, Culinary Delights, and Unforgettable Moments</p>
                        </div>
                        <div className="row-3">
                            <div className="input-btn-wrapper">
                                <input type="email" placeholder="Enter email address..."></input>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}
