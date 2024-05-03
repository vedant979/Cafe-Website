import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./MenuStructure.css";

import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { MenuListCard } from "../../components/MenuListCard/MenuListCard";

import MenuItemList from "../../JsonFile/MenuCarouselData.json";
import items from "../../JsonFile/MenuData/itemData/Demo.json";
export const MenuStructure = () => {
  var sliderMenu = document.getElementsByClassName("slider-wrapper-2");
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(items);
  const [col1, setCol1] = useState();
  const [col2, setCol2] = useState();
  const[width, setWidth] = useState(window.outerWidth);
  const[count, setCount] = useState();

  const [myCartData, setMyCartData] = useState([
    {
      img:"",
      name:"",
      count:"",
      price:""
    }
  ]);
  useEffect(()=>{
    if(myCartData.name!=""){
      console.log("yes")
      localStorage.setItem("CartData", JSON.stringify(myCartData));
    }
  })
  
  window.onresize=()=>{
    setWidth(window.innerWidth);
  }
  // console.log(width)
  useEffect(() => {
    items.map((x) => {
      if (x.page === location.pathname) {
        setData(x);
        setCol1(x.key1);
        setCol2(x.key2);
        setCount(x.count);
      }
    });
  }, [location.pathname]);

  // ------------Carousel-------------
  const length = 4;
  function handlePrev() {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    sliderMenu[0].style.transform = "translateX(" + index * -11 + "%)";
    console.log(index);
  }
  function handleNext() {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    console.log(index);
    sliderMenu[0].style.transform = "translateX(" + index * -11 + "%)";
  }
  return (
    <div className="main-Menucontainer">
      <NavBar />
      <div className="menu-container-1">
        <div className="menu-bg-img">
          <img src={data.img}></img>
        </div>
        <div className="menu-slider-container">
          <div className="item-slider">
            <div className="slider-wrapper-2" id="sliderMenu">
              {MenuItemList.map((data) => {
                return (
                  <div className="items" key={data.id}>
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <Link
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "white",
                        }}
                        to={data.to}
                      >
                        {data.name}
                      </Link>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className='control-btns-menu'> */}
          <img
            src="/src/assets/Sunset/prevArrowMenu.svg"
            className="left-btn"
            onClick={handlePrev}
          ></img>
          <img
            src="/src/assets/Sunset/nextArrowMenu.svg"
            className="right-btn"
            onClick={handleNext}
          ></img>
          {/* </div> */}
        </div>
      </div>
      <div className="item-wrapper" style={width<500 ? location.pathname==="/Menu/menu4"? 
        {flexDirection:"column",height:"max-content" }:{height:"max-content"} : {flexDirection:"column",height:"max-content"}}>
      {location.pathname==="/Menu/menu4" && <div className={`slides-title ${width<500 && "slides-titleBefore500"} `} >
                <h1 style={{color:"white", fontSize:"2vw", textTransform:"uppercase"}}>Café Sunset Sides Selection</h1>
            </div>}
        <div className="item-container" style={width<500 ? {alignItems:"center"}:{}}>

          <div className="left-part-div">
            <div className="item-list">
              {col1 &&
                col1.map((data1) => {
                  return (
                    <>
                      {
                        <>
                          { width>500?
                            location.pathname!="/Menu/menu4" && <div className="type">
                              <h1>{data1.name}</h1>
                            </div> :
                            location.pathname!="/Menu/menu4" && <div className="type">
                              <div className="type-title">
                                <h1>{data1.name}</h1>
                              </div>
                            </div>
                          }
                          {data1 &&
                            data1.items.map((data) => {
                              // console.log(data);
                              return (
                                <>
                                  {
                                    <MenuListCard
                                      setMyCartData={setMyCartData}
                                      count={count}
                                      border={data.border}
                                      width={width}
                                      key={data.id}
                                      name={data.name}
                                      price={data.price}
                                      flag={data.veg}
                                    />
                                  }
                                </>
                              );
                            })}
                        </>
                      }
                    </>
                  );
                })}
            </div>
          </div>
          <div className="right-part-div">
            <div className="item-list">
              {col2 &&
                col2.map((data1) => {
                  return (
                    <>
                      {
                        <>
                          { width>500?
                            <div className="type">
                              <h1>{data1.name}</h1>
                            </div> : location.pathname==="/Menu/menu8" ? <></>:
                            <div className="type">
                              <div className="type-title">
                                <h1>{data1.name}</h1>
                              </div>
                            </div>
                          }
                          {data1 &&
                            data1.items.map((data) => {
                              // console.log(data);
                              return (
                                <>
                                  {
                                    <MenuListCard
                                      setMyCartData={setMyCartData}
                                      height5={(location.pathname==="/Menu/menu5" && width>1024)?true:false}
                                      height={"75%"}
                                      height2={true}
                                      border={data.border}
                                      count={count}
                                      width={width}
                                      key={data.id}
                                      name={data.name}
                                      price={data.price}
                                      flag={data.veg}
                                    />
                                  }
                                </>
                              );
                            })}
                        </>
                      }
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    // <>{location.pathname}</>
  );
};
