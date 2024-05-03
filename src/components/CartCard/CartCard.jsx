import React, { useState } from 'react'
import "./CartCard.css"
export const CartCard = ({name, price, key, count}) => {
  const[numOfItem, setNumOfItem] = useState(count);

  function handleDelete(){
    if(numOfItem<=1){
      setNumOfItem(1);
    }else{
      setNumOfItem(numOfItem-1)
    }
  }
  function handleInc(){
    setNumOfItem(numOfItem+1)

  }
  return (
    <div className='cart-Card'>
        <div className='left-div'>
          <div className='item-image'></div>
          <div className='item-details'>
            <p className='name'>{name}</p>
            {/* <p className='desc'>description</p> */}
          </div>
        </div>
        <div className='right-div'>
          <div className='cost'>
            <p>{price}</p>
          </div>
          <div className='count'>
            <div className='delete'>
              <img src='/src/assets/Sunset/deleteBtn.png'onClick={handleDelete}></img>
            </div>
            <div className='value'>
              <p>{numOfItem}</p>
            </div>
            <div className='inc'>
              <img src='/src/assets/Sunset/addBtn.png'onClick={handleInc}></img>
            </div>
          </div>
        </div>
        
    </div>
  )
}
