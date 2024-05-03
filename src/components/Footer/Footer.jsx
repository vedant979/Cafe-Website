import React from 'react'
import "./Footer.css";

import fb from "../../assets/Sunset/facebook-logo.svg"
import wa from "../../assets/Sunset/whatsapp.svg"
import insta from "../../assets/Sunset/instagram-logo.svg"
import twitter from "../../assets/Sunset/twitter.svg"
export const Footer = () => {
  return (

        <div className="sub-container-7of0">
            <div className="wrapper-7of0">
                <div className="footer-items">
                    <div className="col-1">
                        <div className="wrapper-col1">
                            <p>Address</p>
                            <div className="list">
                                <p>
                                    Cafe<br></br>
                                    Plot No. 45, Street No.14<br></br>
                                    Marol MIDC Industry <br></br>
                                    Estate,<br></br>
                                    Andheri <br></br>
                                    East,Mumbai-400093
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="wrapper-col2">
                            <p>Help & Info</p>
                            <div className="list">
                                <a href="">About Cafe</a>
                                <a href="">Careers</a>
                                <a href="">FAQs</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wrapper-col3">
                            <p>Contact Us</p>
                            <div className="list">
                                <a href="">1809-908-5647 </a>
                                <a href="">Get in Touch</a>
                                <a href=""> Chat With Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="wrapper-col4">
                            <p>Useful Links</p>
                            <div className="list">
                                <a href=""> Privacy Policy</a>
                                <a href=""> Terms of Service</a>
                                <a href=""> Payment Issues</a>
                                <a href=""> Net Banking</a>
                                <a href=""> Custom Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row-1">
                            <p>About us</p>
                        </div>
                        <div className="row-2">
                            <p>Terms of use</p>
                        </div>
                        <div className="row-3">
                            <p>Services</p>
                        </div>
                        <div className="row-4">
                            <p>Policies</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper2-7of0">
                    <div className="wrapper">
                        <div className="social-links">
                            <p>Follow Us on :</p>
                        </div>
                        <div className="logos">
                            <div> <img src={fb} alt=""></img></div>
                            <div> <img src={wa} alt=""></img></div>
                            <div> <img src={insta} alt=""></img></div>
                            <div> <img src={twitter} alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-sec">
                <p>@2023 Railworld India. All Rights Reserved</p>
            </div>
        </div>
  )
}
