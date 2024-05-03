import React from 'react'
// import Menu from '../../pages/Menu/Menu1'
import "./Menucomp.css";
import like from "../../assets/Sunset/like.png";

function Menucomp({ headImage, headTitle, dishes }) {
  return (
    <>
      <div className="head">
        <div className="head-image">
          <img src={headImage} alt="" />
        </div>
        <div className="head-title">
          <h1>{headTitle}</h1>
        </div>
      </div>
      <div className="list">
        {dishes.map((dish, index) => (
          <div className="detail" key={index}>
            <div className="item">
              <div className="r1">
                <div className="dish-name">
                  <h2>{dish.name}</h2>
                </div>
                <div className="dish-price">
                  <p>{dish.price}</p>
                </div>
              </div>
              <div className="r2">
                <div className="dish-image">
                  <img src={dish.image} alt="" />
                </div>
                <div className="like">
                  <img src={like} />
                </div>
                <div className="cart">
                  <div className="c1">
                    <h1>-</h1>
                  </div>
                  <div className="c2">
                    <h1>1</h1>
                  </div>
                  <div className="c3">
                    <h1>+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menucomp;