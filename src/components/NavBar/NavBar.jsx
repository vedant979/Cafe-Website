import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { useNavigate, useLocation } from "react-router-dom";
// --------------------------------------CSS----------------------------------------------
import "./NavBar.css";

// ---------------------------------LOGOS-and-Sunset--------------------------------------
import logo from "../../assets/Sunset/sunset-cafe-high-resolution-logo-transparent.png";
import cartLogo from "../../assets/Sunset/icons8-cart-50.png";
import MenuLogo from "../../assets/Sunset/Menu.svg";
import closeLogo from "../../assets/Sunset/close.svg";
import sunsetLogo from "../../assets/Sunset/sunset.svg";
import cafeLogo from "../../assets/Sunset/cafr.svg"
import searchIcon from "../../assets/Sunset/find.svg";
export const NavBar = (props) => {   
    
    let loc = useLocation();
    
    const[flagBlog, setFlagBlog] = useState(true);
    const[checkClick, setCheckClick] = useState(false);
    useEffect(()=>{
        // console.log(props.pathname+" "+loc.pathname)
        props.pathname!=loc.pathname ? setFlagBlog(true) : setFlagBlog(false);
    },[])

    const [flag, setFlag] =  useState(false);
    function handleClick(){
        setFlag(!flag);
    }
    function handleClickOnSearchBar(){
        setCheckClick(!checkClick);
    }



  return (
    <section className="sub-container-1of0" style={flagBlog ? {backgroundColor:'rgba(37, 35, 35, 1)'} : {backgroundColor:'transparent'}} >
    <div className="nav-wrapper">
        <div className="logo-container">
            <img src={logo} className="logo-size"></img>
        </div>
        <div className={`nav-item-wrapper  ${flag && "dropNav"}`}>
            <div className="nav-top-wrapper">
                <div className="item-0-wrapper">
                    <div className="item-1of5">
                        <Link to="/signup"><p>Sign up</p></Link>
                    </div>
                    <p>|</p>
                    <div className="item-2of5">
                        <Link to="/Auth"><p>Login</p></Link>
                    </div>
                </div>
                <div className="close-icon">
                    <div className="close">
                        <p>Close</p>
                    </div>
                    <img src={closeLogo} onClick={handleClick} className="close-logo"></img>
                </div>
            </div>
            <div className="logo-wrapper">
                <div className="logo-1">
                    <img src={sunsetLogo} alt=""></img>
                </div>
                <div className="logo-2">
                    <img src={cafeLogo}  alt=""></img>
                </div>
            </div>
            <div className="item-1  common-div ">
                <Link to="/" ><p>Home</p></Link>
            </div>
            <div className="item-2  common-div">
                <Link to="/Menu"><p>Menu</p></Link>
            </div>
            <div className="item-3  common-div">
                <Link to="/Contactus"><p>Contact Us</p></Link>
            </div>
            <div className="item-4 common-div">
                <Link to="/Blog"><p >Blog</p></Link>
            </div>
            {flagBlog &&            
                <div className={`search-bar ${checkClick && "increaseLen"}`}>
                    <img src={searchIcon} alt=""></img>
                    <input type="text" onClick={handleClickOnSearchBar} placeholder="Search items"></input>
                </div>
            }
            <div className="item-5-wrapper">
                <div className="item-1of5">
                    <Link to="/signup"><p>Sign up</p></Link>
                </div>
                <p>|</p>
                <div className="item-2of5">
                    <Link to="/auth"><p>Login</p></Link>
                </div>
            </div>
        </div>
        <div className="cart-logo-wrapper">
            {flagBlog ?
                // return(

                <div className="search-bar">
                    <img src={searchIcon} alt=""></img>
                    <input type="text" placeholder="Search items"></input>
                </div>
            // )
            : 
                // return(
                    <>
                    <Link to="" className="cart-icon"><img src={cartLogo} height="30px" alt=""></img></Link>
                    <Link to="" className="cart-icon-para"><p>My Cart</p></Link> 
                    </>
                // )
             }
            <img src={MenuLogo} onClick={handleClick} className="nav-menu-logo"></img>
        </div>
    </div>
</section>
  )
}

