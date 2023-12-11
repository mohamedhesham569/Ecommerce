import React from 'react'
import { useState } from 'react';

const Carsoul=(items)=> {
    const[carsoulindex,setCarsoulindex]=useState(0);

  const next=()=>{
    setCarsoulindex((previous)=>(previous +1) % items.length)
  }
  const prev=()=>{
    setCarsoulindex((previous)=>(previous -1+items.length) % items.length)
  }
  console.log(items);
  return (
    <div className="carousel">
      <button onClick={prev}>Previous</button>
      <div className="carousel-item">
        {/* Display the current item */}
        <>
                    <div className="card2">
                        <div className="card-icons"><i class="fa-regular fa-heart heart"></i>
                    <i class="fa-solid fa-cart-plus" ></i></div>
                    <div className="card-image"><img src={items.items[carsoulindex].images} className="card-img-top" alt="..." style={{margin:"20px 0px"}}/></div>
                    
                    <div className="card-content"><p className='brand'>{items.items[carsoulindex].brand}</p>
                    <h6 className="card-title fw-bolder titel">{items.items[carsoulindex].titel}</h6>
                    <p className="price">${items.items[carsoulindex].price}</p></div>
                    
                
                </div>
                </>
      </div>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Carsoul