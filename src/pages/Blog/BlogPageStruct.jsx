import React, { useEffect } from 'react';
import "./BlogPageStruct.css";
import BlogData from "../../JsonFile/BlogData.json";
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import blog1Img from "../../JsonFile/Blog1Img.json";
export const BlogPageStruct = () => {
    // console.log(BlogData[0])
    console.log(window.innerWidth)
    useEffect(()=>{
        BlogData.map( x=> console.log(x))
    },[])
  return (
    
    <div className='main-container-blog'>
        <NavBar/>
        <>
        {BlogData.map((data)=>{
            // console.log(location.pathname)
            return(
                <>
                    {location.pathname===`/Blog${data.blog}` && 
                        <>
                            <div className='section-1'>
                                <div className='row-1-head'>
                                    <h1>{data.heading}</h1>
                                </div>
                                <div className='row-2' style={{height: location.pathname==="/Blog3" ? "55%" :""}}>
                                    <div className='row-2-para'>
                                        <p>{data.para1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='section-2'>
                                <div className='row-1-item1' style={(location.pathname==="/Blog5") ? {height:"60%", flexDirection:"column-reverse", alignItems:"center"} :{}}>

                                    <div className="col-1"  style={ {width: location.pathname==="/Blog4" &&"100%",
                                                                    height: location.pathname==="/Blog5"?"45%":""}}>
                                        <div className='row-1'>
                                            <p>{data.item1head}</p>
                                        </div>
                                        <div className='row-2'>
                                            <p>{data.item1Data}</p>
                                        </div>
                                    </div>
                                { (location.pathname!=="/Blog4" )?
                                    <div className='col-2' style={location.pathname==="/Blog5" ? {height:"60%"} :{}} >
                                        {location.pathname==="/Blog3" &&
                                           <div className='img-container Blog3'>
                                                <img src={data.item1Img}></img>
                                           </div>
                                        }
                                        {(location.pathname==="/Blog1" || location.pathname==="/Blog2" || location.pathname==="/Blog6") &&
                                            <div className='img-container Blog126'>
                                                <img src={data.item1Img}></img>
                                            </div>
                                        }
                                        {location.pathname==="/Blog5" &&
                                            <div className='img-container Blog5' >
                                                <img src={data.item1Img}></img>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <></>
                                }
                                </div>
                                <div className='row-2-item2' style={location.pathname==="/Blog5" ? {height:"30%"}:{}}>
                                { (location.pathname!=="/Blog4" && location.pathname!=="/Blog5") ?
                                    <div className='col-2' >
                                    {location.pathname==="/Blog3" &&
                                            <div className='img-container Blog3'>
                                                <img src={data.item2Img}></img>
                                            </div>

                                        }
                                        {(location.pathname==="/Blog1" || location.pathname==="/Blog2" || location.pathname==="/Blog6") &&
                                            <div className='img-container Blog126'>
                                                <img src={data.item2Img}></img>
                                            </div>
                                        }
                                        {location.pathname==="/Blog4" &&
                                            <>
                                            
                                            </>
                                        }
                                    </div>
                                    :
                                    <></>
                                }
                    

                                    <div className='col-1' style={(location.pathname==="/Blog4" || location.pathname==="/Blog5") ? {width:100+"%"} :{}} >
  
                                        <div className='row-1'>
                                            <p>{data.item2head}</p>
                                        </div>
                                        <div className='row-2'>
                                            <p>{data.item2Data}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </>
            )
        })
        }
        { location.pathname==="/Blog1" &&
            <div className='section-3'>
                <div className='sec-3-wrapper'>
                        <div className='sec-3-head'>
                            <h1>Become a Sunset Insider: Join Our Exclusive Community</h1>
                        </div>
                    <div className='row-1'>

                        <div className='row-1-list'>
                            <ul>
                                <li>Newsletter: Subscribe to our newsletter for sneak peeks, exclusive recipes, and members-only offers. </li>
                                
                                <li>Sunset Insider Club: Unlock premium benefits by becoming a part of our exclusive membership program. </li>
                            </ul>
                            <h3>Indulge in the Extraordinary. Reserve Your Seat for an Exclusive Culinary Soiree at Café Sunset.</h3>
                        </div>
                    </div>
                    <div className='row-2'>
                    <div className='row-2-list'>
                        <p>Limited-Time Exclusive Events: Sunset Symphony Night: </p>
                        <ul>
                            <li>An evening of live music, exclusive dishes, and a curated selection of wines. Limited seats available. Reserve now.</li>
                            <li> Chef's Table Experience: Join our head chef for an intimate dining experience featuring a specially crafted menu. Limited to a select few connoisseurs.</li>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
        }
        {
            location.pathname==="/Blog1" && 
            <div className='section-4'>
                <div className="sec-4-wrapper">
                    <div className='sec-4-head'>
                        <h1>WHERE WE’VE BEEN FEATURED</h1>
                    </div>
                    <div className='img-wrapper'>
                        {
                            blog1Img.map((data)=>{
                                return(
                                    <div key={data.key} className={`img ${data.key}`}>
                                        <img src={data.img}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        }
        {
            location.pathname==="/Blog2" &&
            <div className='section-4'>
                <div className="sec-4-wrapper">
                    <div className='para-wrapper blog2'>
                        <p>
                        The sun may set, but the flavors linger, inviting you to return and continue your exploration of the rich tapestry of Café Sunset – a journey through flavors and moments that linger long after you've left our doors.
                        </p>
                    </div>
                </div>
            </div>
        }
        {
            location.pathname==="/Blog4" &&
            <div className='section-4'>
                <div className="sec-4-wrapper">
                    <div className='sec-4-head blog4-head'>
                        <h1>  Café Sunset - Where Twilight Unfolds in Every Sip  </h1>
                    </div>
                    <div className='para-wrapper blog4-sec4'>
                        <p>
                        For inquiries and reservations, contact us. <br></br> Follow us on [Social Media Links] for the latest updates and exclusive offers.
                        </p>
                    </div>
                </div>
            </div>
        }
        {
            location.pathname==="/Blog5" && 
            <div className='section-4'>
                <div className="sec-4-wrapper">
                    <div className='sec-4-head'>
                        <h1>Bites of Bliss: Your Invitation to Indulgence</h1>
                    </div>
                    <div className='para-wrapper'>
                        <p>
                        Café Sunset invites you to experience the sweet symphony of pastries—a crescendo of flavors, textures, and <br></br> moments that elevate the simple act of biting into a blissful indulgence. <br></br>Join us for a pastry sojourn at Café Sunset, where every bite is a note in the melody of sweetness, and the art <br></br>of pastry becomes a delightful journey into the heart of indulgence.
                        </p>
                    </div>
                </div>
            </div>
        }
        {
            location.pathname==="/Blog6" && 
            <div className='section-4'>
                <div className="sec-4-wrapper">
                    <div className='sec-4-head'>
                        <h1>Culinary Escapes Await at Café Sunset</h1>
                    </div>
                    <div className='para-wrapper'>
                        <p>
                        Embark on a flavorful journey through the seasons at Café Sunset, where our Seasonal Specialties bring the <br></br>essence of India to your plate. Join us as we celebrate the ever-changing tapestry of flavors that mirrors the<br></br> spirit of each season. Every dish is an invitation to savor the beauty of nature's culinary escapades, where<br></br> spices, aromas, and seasonal delights intertwine in a dance of unparalleled gastronomic joy.
                        </p>
                    </div>
                </div>
            </div>
        }

        </>
        <Footer/>
    </div>

  )
}
