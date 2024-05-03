import React, { useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
// import img1
import { Link } from "react-router-dom";

import "./Menu.css";

import MenuCarouselData from "../../JsonFile/MenuCarouselData.json";
import Sunset from "../../assets/Sunset/sunset.svg";
import Cafe from "../../assets/Sunset/cafr.svg";
import specialityDrink from "../../assets/Sunset/specialityDrinks.png";
import coldBeverages from "../../assets/Sunset/coldBeverages.png";
import hotBeverages from "../../assets/Sunset/hotBeverages.png";
import { MenuDrinkCard } from "../../components/MenuDrinksCard/MenuDrinkCard";

import coldBevs from "../../JsonFile/MenuData/Drinks&Bevs/ColdBeverages.json";
import hotBevs from "../../JsonFile/MenuData/Drinks&Bevs/HotBeverages.json";
import specialDrink from "../../JsonFile/MenuData/Drinks&Bevs/SpecialityDrinks.json";
import { MenuCarousel } from "../../components/MenuCarousel/MenuCarousel";
export const Menu = () => {
  let [width, setWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="main-container">
      <NavBar />
      {/* <div className="after-navbar"> */}
      <section className="sub-container-2Menu">
        <div className="img-1">
          <div className="brdr-left"></div>
          <div className="img-sunset">
            <img src={Sunset} alt="" />
          </div>
          <div className="brdr-right"></div>
        </div>
        <div className="img-2">
          <img src={Cafe} alt="" />
        </div>
      </section>
      <section className="sub-container-Menu">
        <div className="drinks-wrapper">
          <div className="right-box-menu">
            <div className="wrapper-right-box">
              <div
                className="right-box-menu-img"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={specialityDrink}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                ></img>
              </div>
              <div className="right-box-menu-button">
                <button>SPECIALITY DRINKS</button>
              </div>
            </div>
            <div className="specialDrink-container">
              {specialDrink.map((data) => {
                return (
                  <MenuDrinkCard
                    width={width}
                    key={data.id}
                    drink={data.drink}
                    description={data.description}
                    price={data.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="left-box-menu">
            <div className="wrapper-left-box">
              <div className="left-box-menu-img" style={{ overflow: "hidden" }}>
                <img
                  src={hotBeverages}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                ></img>
              </div>
              <div className="left-box-menu-button">
                <button>HOT BEVERAGES</button>
              </div>
            </div>
            <div className="hotBev-container">
            {hotBevs.map((data) => {
              return (
                <MenuDrinkCard
                  width={width}
                  key={data.id}
                  drink={data.drink}
                  description={data.description}
                  price={data.price}
                />
              );
            })}
          </div>
          </div>
          <div className="mid-box">
            <div className="wrapper-mid-box">
              <div className="mid-box-img" style={{ overflow: "hidden" }}>
                <img
                  src={coldBeverages}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                ></img>
              </div>
              <div className="mid-box-button">
                <button>COLD BEVERAGES</button>
              </div>
            </div>
            <div className="coldBev-container">
            {coldBevs.map((data) => {
              return (
                <MenuDrinkCard
                  width={width}
                  key={data.id}
                  drink={data.drink}
                  description={data.description}
                  price={data.price}
                />
              );
            })}
          </div>
          </div>
        </div>

        <div className="wrapper-3">
          <div className="img-1">
            <div className="brdr-left"></div>
            {/* <div className="img-sunset"> */}
            <button>Read More</button>
            {/* </div> */}
            <div className="brdr-right"></div>
          </div>
        </div>
      </section>
      {/* </div> */}
      {/* <MenuCarousel/>
       */}
      <section className="navigation-carousel">
        <div className="slider-wrapper-Menu">
          <div className="slider">
            {MenuCarouselData.map((data) => {
              return (
                <MenuCarousel width={width} key={data.id} img={data.img} name={data.name} />
              );
            })}
          </div>
        </div>
        <div className="menu-btn-container">
          <button>
            <Link to="/Menu/menu1">Explore</Link>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
