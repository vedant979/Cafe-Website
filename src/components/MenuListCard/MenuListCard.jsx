import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import "./MenuListCard.css";

export const MenuListCard = ({setMyCartData ,name, flag, price, width , count, height, border, height2, height5}) => {
  // console.log(border);
  // console.log(height5)
  if(location.pathname!="/Menu/menu5"){
    height2 = false;
  }


  // console.log(myCartData)
  let [value, setValue] = useState(1);
  let [finalValue, setFinalValue] = useState(1);

  function handleDecrement() {
    if (value <= 1) {
      setValue(1);
    } else {
      setValue((value -= 1));
    }
    setFinalValue(value);
  }
  function handleIncrement() {
    setValue((value += 1));
    setFinalValue(value);
  }


  function handleClick(){
    // console.log(setMyCartData)
      setMyCartData((prev)=>{
        return[
            ...prev,
          {
            img:"",
            name:name,
            count:value,
            price:price
          }
        ]
          
        
      })
  }   
  // JSON.stringify

  // myCartData.map((x)=>{
  // })

  return (
    <div
      className={`container-item-1 ${height5 && "height250"}${(height2 && width<500) ? "height200 justify-spaceEvenly" : ""} 
      ${(height2 && width>500 && width<=1024) && "height150"} ${width>500 ? "noBorder" : ""}`}
      style={ { height:location.pathname === "/Menu/menu5"? "200px":"",
                borderBottom: (border && width<500)?"0px": "1px solid yellow",
                                       } }
        
      
    >
      <div className={`item-details  ${height2 && "justify-spaceEvenly"}`} >
        <div className={`item-name ${(height2 && width<500) && "height90"}`} style={(height2 && width<500)? {height:"90% !important"}:{}}>
          <h1>{name}</h1>
        </div>
        <div className="item-price">
          <p>{price}</p>
        </div>
      </div>

      <div className={`functions ${height2 && "height30"}`}>
        {flag != undefined && (
          <div className={`veg-nonVeg ${flag ? "green" : "red"}`}>
            <div
              className={`color-redOrGreen ${flag ? "green-bg" : "red-bg"}`}
            ></div>
          </div>
        )}
        {/* {console.log(width)} */}

        {width > 500 ? (
          <>
            <div className="addMore">
              <div className="decrementer" onClick={handleDecrement}>
                -
              </div>
              <div className="value" >{value}</div>
              <div className="incrementer" onClick={handleIncrement}>
                +
              </div>
            </div>
            <div className="addToCart">
              <button className="btn-addToCart" onClick={handleClick}>
                ADD <img src="/src/assets/Sunset/VectorPlus.svg"></img>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="function2">
              <div className="item-img">
                <img src="/src/assets/MenuImg/Burger/b1.png"></img>
              </div>
              <div className="addMore" style={{position:"relative", height:"20%", width:"35%", borderRadius:"10px", left:"35%", bottom:"20%"}}>
                <div className="decrementer" onClick={handleDecrement} style={{fontSize:"4vw"}}>
                  -
                </div>
                <div className="value"style={{fontSize:"3vw"}}>{value}</div>
                <div className="incrementer" onClick={handleIncrement}style={{fontSize:"4vw"}}>
                  +
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
