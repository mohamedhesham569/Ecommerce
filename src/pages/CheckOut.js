import React, { useState } from 'react'
import { useContext,useEffect } from 'react';
import Allcart from '../components/Allcart';
import cartcontext from '../components/Context';
import "./checkout.css"
import Alert from 'react-bootstrap/Alert';

function CheckOut() {
    const{CartItemsStore}=useContext(cartcontext);
    const{handleUpdateItemQuantity}=useContext(cartcontext);
    const{handleRemoveItem}=useContext(cartcontext);
    const{total_price}=useContext(cartcontext);
    const [inpitValue,SetinputValue]=useState("");
    const [isSubmit,SetisSubmit]=useState(false);

    
        useEffect(()=>{
        document.getElementById('creditCardNumber').addEventListener('input', function(e) {
        var target = e.target;
        var input = target.value.replace(/[^\d]/g, '').substring(0,16); // Remove non-digits and limit to 16 characters
        var formattedInput = input.replace(/\B(?=(\d{4})+(?!\d))/g, ' '); // Insert spaces every four digits
        target.value = formattedInput;
      },[]);
      })

      let dicountAmount=0
      let discount=0
      if(inpitValue==="elbenzo"){
        discount="-%10";
        dicountAmount=0.1;
      }if(inpitValue==="cr7"){
        discount="-%20";
        dicountAmount=0.2;
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        SetisSubmit(true)
        setTimeout(() => {
            SetisSubmit(false);
          }, 2000);
      }
    


  return (
    <>
    <section className='container-xxl'>
        {isSubmit?(
            <Alert variant="success" className='alert auto-close ' id='alert'>
            <Alert.Heading className='justify'><i class="fa-regular fa-circle-check" style={{fontSize:"50px"}}></i></Alert.Heading>
            <Alert.Heading className='justify'>successful payment</Alert.Heading>
            <p className='justify'>
              your order will arrive soon
            </p>
            <hr />
          </Alert>
        ):null}
    
        <div className="check-out my-3">
            <div className="check-out-header">
                <h3>shopping cart</h3>
            </div>
            <div className="check-out-body container-xxl row">
                <div className="col-8 itemscheck" >
                <div className="check-labels row fs1">
                    <div className="col-5">Product</div>
                    <div className="col-2">price</div>
                    <div className="col-3" style={{padding:"0 18px"}}>quantity</div>
                    <div className="col-2">total</div>
                </div>
                <div className="check-products" >
                    {CartItemsStore.map((product)=>(
                    <div className="check-products-card row d-flex  align-items-center" key={product.id}>
                        <button className='check-card-remove' onClick={()=>{handleRemoveItem(product.product)}}> <i class="fa-solid fa-xmark fs-3" style={{color:"gray"}}></i> </button>
                        <div className="col-5 d-flex  align-items-center">
                            <img src={product.product.images} alt="pic" className='check-product-img' />
                            <div className="check-product-title">
                            <p className='Cart-brand'>{product.product.brand}</p>
                            <h6 className="Cart-card-title fw-bolder">{product.product.titel}</h6>
                            </div>
                        </div>

                        <div className="col-2 cprice">
                        <p className="Cart-price my-1">${product.product.price}</p>
                        </div>
                        <div className="col-3 fs7" style={{padding:"0"}}>
                        <div className="quantity my-1"><button onClick={() => product.product.quantity!==0?handleUpdateItemQuantity(product.product, product.quantity - 1):handleRemoveItem(product.product)} className="quantity-button" style={{fontSize:"45px"}}>-</button>
                    <p className="quantity-value"> Quantity:{product.quantity}</p>
                    <button onClick={() => handleUpdateItemQuantity(product.product, product.quantity + 1)} className="quantity-button">+</button>
                    {/* <button className='trash' onClick={()=>{handleRemoveItem(product.product)}}>
                    <i class="fa-solid fa-trash-can"></i>
                    </button> */}
                    </div>
                        </div>
                        <div className="col-2">
                        <p className="Cart-price my-1">${(product.product.price*product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                <div className="col-4 check-out-info">
                    <form id='ismForm' method='get' onSubmit={handleSubmit}>
                    <label htmlFor="name" className='d-flex check-out-lable'>
                        <p className='fs8'>name:</p>
                        <input type="text" id='name' required/>
                    </label>
                    <label htmlFor="email" className='d-flex check-out-lable'>
                        <p className='fs8'>email:</p>
                        <input type="email" id='email' required/>
                    </label>
                    <label htmlFor="creditCardNumber" className='d-flex check-out-lable align-items-center'>
                        <p className='fs8'>Credit card number:</p>
                        <input type="text" id='creditCardNumber' name="creditCardNumber" placeholder="XXXX XXXX XXXX XXXX" maxlength="19"  required/>
                    </label>
                    <label htmlFor="coupon" className='d-flex check-out-lable'>
                        <p className='fs7'>coupon:</p>
                        <input type="text" id='coupon'  onChange={(e)=>{SetinputValue(e.target.value)}}/>
                    </label>
                        <div className="total-price-discount my-2">
                            <div className="my-3"><p>discount : {discount}</p>
                            <p className='fs8'>total price : ${(total_price-(total_price*dicountAmount)).toFixed(2)}</p></div>
                            
                        </div>
                        <button className='formSubmit'><input type="submit" value="submit"/>
                        <i class="fa-solid fa-truck-fast"></i>
                        </button></form>
                </div>
            </div>
        </div>
        <Allcart />
    </section>
    </>
  )
}

export default CheckOut