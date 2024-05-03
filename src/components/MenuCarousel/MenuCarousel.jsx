import React from 'react'
import "./MenuCarousel.css"
import { Link } from 'react-router-dom'


export const MenuCarousel = (props) => {
  return (
    <div className='cards' key={props.id}>
      <div className='img-container'>
        <img  className="menu-img" src={props.img}></img>
      </div>
      <div className='title-container'>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
