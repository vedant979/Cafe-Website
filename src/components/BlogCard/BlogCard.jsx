import React from 'react'
import "./BlogCard.css"
import { Link } from 'react-router-dom'
export const BlogCard = (props) => {
    // console.log(props.)
  return (
    <>
                <div className="container-wrapper">
                <div className="container">
                    <div className="container-heading">
                        <p>LATEST BLOG POST</p>
                    </div>
                    <div className="wrapper">
                        
                        <div className="card1">
                            <div className='left-box'>
                                <img src={props.img} style={{height:"100%", width:"100%", objectFit:"cover"}}></img>
                            </div>
                            <div className='right-box'>
                                <p>{props.para}</p>
                                <Link to={`/Blog${props.id}`} >{props.btn}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
