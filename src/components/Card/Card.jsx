import React from 'react'
import "./Card.css";

export const Card = (props) => {

  return (
    <div className="slider-cards one">
        <div className="card-wrapper">
            <div className="img-container">
                <img src={props.image} alt="" className="card-img-size"></img>
            </div>
            <div className="para-wrapper">
                <div className="card-heading">
                    <h4>
                        {props.heading}
                    </h4>
                </div>
                <div className="para">
                <p>{props.para}</p>
                </div>
                <div className="more-btn">
                    <div className="btn">FIND OUT MORE </div>
                    <div className="right-arrow">---</div>
                </div>
            </div>
        </div>
    </div>
  )
}
