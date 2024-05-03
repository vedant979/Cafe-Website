import React from 'react'
import "./MenuDrinkCard.css";

export const MenuDrinkCard = (props) => {
  console.log(props.width)
  return (
    <div className='drinkCards' key={props.key}>
        <div className='left-col'>
          <p>{props.drink}</p>
          <p>{props.description}</p>
          {
                    props.width<426 ? 
                    <>
                <p className='price-tag'>{props.price}</p>

                    </>:
                    <></>
                  
          }
        </div>
        { props.width<500 ? <></>:
          <div className='right-col'>
            <button><p>+</p></button>
            <p>{props.price}</p>
          </div>
        }
    </div>
  )
}
