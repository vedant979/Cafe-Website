import React, { useEffect, useState } from 'react'
import "./Carousel3.css";
import BlogData from "../../JsonFile/BlogCarousel.json";

// import { useLocation } from 'react-router-dom';
import prevBtn from "../../assets/Sunset/prevArrow.svg";
import nextBtn from "../../assets/Sunset/nextArrow.svg"
import { BlogCard } from '../BlogCard/BlogCard';
export const Carousel3 = ({pathname, name}) => {
    // console.log(pathname1);
    const[flag, setFlag]  = useState(false);
    const[imageNo1, setimageNo1] = useState(1);


    var slider = document.getElementsByClassName("slider");
    var slider2 = document.getElementById("motivation-slider");

    useEffect(()=>{
        if(pathname!="/"){   
            setFlag(true);
        }else{
            setFlag(false);
        }
    },[])


    function handleNext(){

        if(imageNo1<(flag?5:2)){
            setimageNo1(imageNo1+1);
        }else{
            setimageNo1(0);

        }
        if(flag){
            slider[0].style.transform="translateX(" + (imageNo1)*(-16.66) + "%)";
        }else{
            slider2.style.transform="translateX(" + (imageNo1)*(-33) + "%)";
        }
    }

    function handlePrev(){

        if(imageNo1<1){
            setimageNo1((flag?5:2));
        }else{
            setimageNo1(imageNo1-1);


        }

        if(flag){
            slider[0].style.transform="translateX(" + (imageNo1)*(-16.66) + "%)";
        }else{
            // console.log("ASd")
            slider2.style.transform="translateX(" + (imageNo1)*(-33) + "%)";
        }
    }

  return (
    
    <div className="col-1" 
    style={flag ?{height:"100%",alignItems:"flex-start"} : {height:"60%",alignItems:"flex-start"}}>
    {/* <!-- <div className="slider-container"> --> */}
        <div className="slider" id="motivation-slider"
        // style={{}}
            style={flag ?{height:"100%", width:"600%"} : {height:"60%", width:"300%"}}
        >
            {flag ?
                BlogData.map((data)=>{
                    // console.log(data)
                        return(
                            <BlogCard  key={data.id} id={data.id} img={data.image} para={data.para} btn={data.btn}/>
                        )
                })

            :
            <>
            <div className="container-wrapper">
                <div className="container">
                    <div className="container-heading">
                        <p>MOTIVATION BEING OUR HARD WORK</p>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-para">
                            <p>
                                "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="container">
                    <div className="container-heading">
                        <p>MOTIVATION BEING OUR HARD WORK</p>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-para">
                            <p>
                                "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="container">
                    <div className="container-heading">
                        <p>MOTIVATION BEING OUR HARD WORK</p>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-para">
                            <p>
                                "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
            }

        </div>
        {!flag &&
            <>
                <div className="control-radio-btns" 
                >
                <div className="radio-1" id="btn1"></div>
                <div className="radio-1" id="btn2"></div>
                <div className="radio-1" id="btn3"></div>
                </div>
            </>
        }

        <div className={`control-btns-6of0 ${flag && "control-btns-6of0-forBlog"}`}
                style={flag ? {}: {}}        
        >
            <div className="btn-1" id="cntrl-btn1" onClick={handlePrev}><img src={prevBtn} alt=""></img></div>
            <div className="btn-1" id="cntrl-btn2" onClick={handleNext}><img src={nextBtn} alt=""></img></div>
        </div>
    {/* <!-- </div> --> */}
</div>
  )
}
