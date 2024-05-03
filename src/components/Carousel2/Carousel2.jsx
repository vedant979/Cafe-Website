import React from 'react'
import "./Carousel2.css";



export const Carousel2 = () => {
// const radioBtns= [document.getElementById("btn-one"),document.getElementById("btn-two"), document.getElementById("btn-three")];
let count= 1;

// setInterval(()=>{
//     if(count>2){
//         count=0;
//     }
//     // (`radio${count}`).click();
//     radioBtns[count].click();
//     count++;
// },3000)


function handleClick1(){
    document.getElementById("offer-slider").style.transform = "translateX(33.32%)"
    document.getElementById("btn-one").style.backgroundColor = "green";
    document.getElementById("btn-two").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    document.getElementById("btn-three").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
}
function handleClick2(){
    document.getElementById("offer-slider").style.transform = "translateX("+(0)+"%)"
    document.getElementById("btn-two").style.backgroundColor = "green";
    document.getElementById("btn-one").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    document.getElementById("btn-three").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
}
function handleClick3(){
    document.getElementById("offer-slider").style.transform = "translateX(-33.32%)"
    document.getElementById("btn-three").style.backgroundColor = "green";
    document.getElementById("btn-two").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
    document.getElementById("btn-one").style.backgroundColor = "rgba(26, 126, 17, 0.5)";
}
  return (
    
    <section className="sub-container-4of0">
    <div className="wrapper-4of0">
        <div className="container-heading">
            <p>DEALS AND OFFERS</p>
        </div>
        <div className="slider-container">
            <div className="slider" id="offer-slider">
                <div className="offer-container-wrapper">
                    <div className="left-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹110<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-1">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹100<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-2">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-container-wrapper">
                    <div className="left-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹70<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-3">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹60<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-4">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-container-wrapper">
                    <div className="left-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹50<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-5">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="box-wrapper">
                            <div className="left-col">
                                <div className="row1">
                                    <p>FLAT</p>
                                </div>
                                <div className="row2">
                                    <p>₹30<br></br>
                                        OFF</p>
                                </div>
                                <div className="row3">
                                    <p>ON ORDER ABOVE ₹599</p>
                                </div>
                                <div className="row4">
                                    <button>Use Code <b>RTH23</b></button>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="img-wrapper img-6">
                                    {/* <!-- <img src="../assets/Sunset/pizza.png" alt=""> --> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="control-radio-btns">
                <div className="radio-1" id="btn-one" onClick={handleClick1}></div>
                <div className="radio-1" id="btn-two" onClick={handleClick2}></div>
                <div className="radio-1" id="btn-three" onClick={handleClick3}></div>
            </div>
        </div>
    </div>
    
</section>
  )
}
