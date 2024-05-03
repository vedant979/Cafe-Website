import { useState } from "react";

import "./Menu1.css";


import logo1 from "../../assets/Sunset/sunset.svg";
import logo2 from "../../assets/Sunset/cafr.svg";
import like from "../../assets/Sunset/like.png";
import Menucomp from "../../components/MenuComp/Menucomp";

import t1 from "../../assets/Sunset/specialityDrinks.png";
import t1d1 from "../../assets/Sunset/tea.png";
import t1d2 from "../../assets/Sunset/tea.png";
import t1d3 from "../../assets/Sunset/tea.png";

import t2 from "../../assets/Sunset/specialityDrinks.png";
import t2d1 from "../../assets/Sunset/tea.png";
import t2d2 from "../../assets/Sunset/tea.png";
import t2d3 from "../../assets/Sunset/tea.png";
import t2d4 from "../../assets/Sunset/tea.png";
import t2d5 from "../../assets/Sunset/tea.png";

import t3 from "../../assets/Sunset/specialityDrinks.png";
import t3d1 from "../../assets/Sunset/tea.png";
import t3d2 from "../../assets/Sunset/tea.png";
import t3d3 from "../../assets/Sunset/tea.png";
import t3d4 from "../../assets/Sunset/tea.png";
import t3d5 from "../../assets/Sunset/tea.png";
import Caromenu1 from "../../components/Caromenu1/Caromenu1";
import Caromenu2 from "../../components/Caromenu2/Caromenu2";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
function Menu1() {
    const navigate = useNavigate()
    function handleClick(){
        navigate("/Menu/menu1")
    }
  return (
    <div className="menu1">
      <NavBar/>
      <div className="logo-decor">
        <div className="decor-d1"></div>
        <div className="decor-d2">
          <div className="logo1">
            <img src={logo1} />
          </div>
          <div className="logo2">
            <img src={logo2} />
          </div>
        </div>
        <div className="decor-d3"></div>
      </div>
      <div className="ssec">
        <div className="ssec-r1">
          <div className="ssec-c1"></div>
          <div className="ssec-c2">
            <h1>FOR YOU</h1>
          </div>
          <div className="ssec-c3"></div>
        </div>
        <div className="ssec-r2">
          <div className="ssec-c11">
            <h1>Recommended</h1>
          </div>
          <div className="ssec-c22">
            <div className="ssec-c22-i">
              <img src={like} />
            </div>
            <div className="ssec-c22-t">
              <h1>Favourites</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="three-cat">
        <div className="one">
          <Menucomp
            headImage={t1}
            headTitle="HOT BEVERAGES"
            dishes={[
              { name: "Espresso ", price: "Rs.120", image: t1d1 },
              { name: "Cappuccino", price: "Rs.250", image: t1d2 },
              { name: "Americano", price: "Rs.150", image: t1d3 },
              // Add more dishes as needed
            ]}
          />
        </div>
        <div className="two">
          <Menucomp
            headImage={t2}
            headTitle="COLD BEVERAGES"
            dishes={[
              { name: "Iced Coffee ", price: "Rs.140", image: t2d1 },
              { name: "Iced Latte", price: "Rs.130", image: t2d2 },
              { name: "Frappuccino", price: "Rs.120", image: t2d3 },
              { name: "Affogato", price: "Rs.110", image: t2d4 },
              { name: "Ice Latte", price: "Rs.110", image: t2d5 },
              // Add more dishes as needed
            ]}
          />
        </div>
        <div className="three">
          <Menucomp
            headImage={t3}
            headTitle="SPECIALTY DRINKS"
            dishes={[
              { name: "Matcha Latte", price: "Rs.120", image: t3d1 },
              { name: "Turmeric Latte", price: "Rs.160", image: t3d2 },
              { name: "Caramel Tea", price: "Rs.160", image: t3d3 },
              { name: "Green Tea", price: "Rs.120", image: t3d4 },
              { name: "Herbal Infusions", price: "Rs.120", image: t3d5 },
              // Add more dishes as needed
            ]}
          />
        </div>
      </div>
      <div className="o-cat">
        <div className="o-cat-1"></div>
        <div className="o-cat-2"><h1>OTHER CATEGORIES</h1></div>
        <div className="o-cat-3"></div>
      </div>
      <div className="caro1">
      <Caromenu1/>
      </div>
      <div className="tam">
        <div className="tam-1"></div>
        <div className="tam-2">
          <div className="cam-1" onClick={handleClick}><h1>EXPLORE</h1></div>
          <div className="cam-2"><h1>BEST OFFERS </h1></div>
        </div>
        <div className="tam-3"></div>
      </div>
      <Caromenu2/>
      <Footer/>
    </div>
  );
}

export default Menu1;