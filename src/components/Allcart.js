import React from 'react';
import { useContext } from 'react';
import cartcontext from '../components/Context';
import "./cart.css"
import { NavLink } from 'react-router-dom';
function Allcart() {
    const{CartItemsStore}=useContext(cartcontext);
    const{handleUpdateItemQuantity}=useContext(cartcontext);
    const{handleRemoveItem}=useContext(cartcontext);
    const{count}=useContext(cartcontext);
    console.log(count)

    function closecart(){
        if(window.innerWidth<=600){
            console.log("les than500")
            document.querySelector(".cart").style.right="-100%";
        }else{
            document.querySelector(".cart").style.right="-40%";
        }
        
    }
    
    return (
    <>
        <div className="cart">
            <div className="ccart">
            <div className="cart-header">
                <button onClick={closecart}> <i class="fa-solid fa-xmark fs-3" style={{color:"gray"}}></i> </button>
            </div>
            <div className="cart-body mb-3">
                {CartItemsStore.map((product)=>(
                    <>
                    <div className="Cart-card" key={product.id}>
                    <img src={product.product.images} className="Cart-card-img" alt="..."/>
                    <div className="Cart-card-content">
                        <p className='Cart-brand'>{product.product.brand}</p>
                    <h6 className="Cart-card-title fw-bolder">{product.product.titel}</h6>
                    <p className="Cart-price">${(product.product.price*product.quantity).toFixed(2)}</p>
                    </div><div className="quantity"><button onClick={() => product.product.quantity!==0?handleUpdateItemQuantity(product.product, product.quantity - 1,product.product.price):handleRemoveItem(product.product)} className="quantity-button" style={{fontSize:"45px"}}>-</button>
                    <p className="quantity-value"> Quantity:{product.quantity}</p>
                    <button onClick={() => handleUpdateItemQuantity(product.product, product.quantity + 1,product.product.price)} className="quantity-button">+</button></div>
                    <button onClick={() => handleRemoveItem(product.product)} className="remove"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    
                    </>
                    ))}
                </div>
                </div>
                <NavLink to={'/CheckOut'} style={{width:"100%"}} className="my-3"><div className="gotocheckout">
                    <button style={{}}>
                        check out
                    </button>
                </div></NavLink>
            </div>
            </>
    )
}

export default Allcart;