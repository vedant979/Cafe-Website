import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import "./Cart.css"
import { CartCard } from '../../components/CartCard/CartCard'
export const Cart = () => {
    const[myCart, setMyCart] = useState();
    const[numberOfItems, setNumberOfItems] = useState()
    const[subTotal, setSubTotal] = useState(10)
    const[tax, setTax] = useState(32)


    useEffect(()=>{
        setMyCart(JSON.parse(localStorage.getItem("CartData")));
        myCart && setNumberOfItems( myCart.length-1)

        myCart && myCart.map((val)=>{
            setSubTotal(subTotal+((parseInt(val.price)*parseInt(val.count)))); 
            console.log( subTotal) 
            

        })
    },[])
    useEffect(()=>{

        myCart && myCart.map((val)=>{
            setSubTotal(subTotal+((parseInt(val.price)*parseInt(val.count)))); 
            console.log( subTotal) 
            

        })
    },[])

  return (
    <>
        <NavBar/>
        <div className='main-container-cart'>
            <div className='left-wrapper-cart'>
                <div className='top-container'>
                    <div className='top-header'>
                        <h1>{numberOfItems} Items selected</h1>
                        <h1>Explore Menu</h1>
                    </div>
                    <div className='items-selected'>
                        <>
                        {
                           myCart && myCart.map((x)=>{
                                return(
                                    <CartCard key={1} name={x.name} price={x.price} count={x.count}/>
                                )
                            })
                        }
                        </>
                    </div>
                </div>

                <div className='bottom-container'></div>
            </div>
            <div className='right-wrapper-cart'>
                <div className='details-cart-container'>

                    <div className='address-details'>
                        <div className='details-heading'>
                            <h1>Choose a delivery address</h1>
                        </div>
                        <div className='address'>
                            <div className='row-1-address'>
                                <div className='left-c-address'>
                                    <p className='p1'>Current Address</p>
                                    <p className='p2'>Samta Colony, Raipur</p>
                                </div>
                                <div className='right-c-address'>
                                    <button>Change</button>
                                </div>
                            </div>
                            <div className='row-2-address'>
                            <div className='left-c-address'>
                                    <p className='p23'>Login to use your saved addresses</p>
                                </div>
                                <div className='right-c-address'>
                                    <button className='my-address'>My Address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='offer-details'>
                        <div className='details-heading'>
                            <h1>Offers</h1>
                        </div>
                        <div className='offer'>
                            <p className='p1Offer'>Select offer / Apply coupon</p>
                            <p className='p2Offer'>Get discount with your order</p>
                        </div>
                    </div>
                    <div className='price-details'>
                        <div className='details-heading'>
                            <h1 >Price Details</h1>
                        </div>
                        <div className='bill'>
                            <div className='top-bill'>
                                <div className='sub-total'>
                                    <p>Sub Total</p>
                                    <p>{subTotal}</p>
                                </div>
                                <div className='discount'>
                                    <p>Discount</p>
                                    <p>-</p>
                                </div>
                                <div className='tax-charges'>
                                    <p>Taxes and Charges</p>
                                    <p>32.2</p>
                                </div>
                            </div>
                            <div className='bottom-bill'>
                                <div className='grand-total'>
                                    <p>Grand Total</p>
                                    <p>{123}</p>
                                </div>
                                <div className='order-btn'>
                                    <button>Place Order</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
