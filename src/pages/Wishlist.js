import React from 'react';
import cartcontext from '../components/Context';
import { useContext } from 'react';
import Allcart from '../components/Allcart';

function Wishlist() {
    const{HandelAddtoWishlist}=useContext(cartcontext);
    const{Wishlist}=useContext(cartcontext);
    const{handleAddToCart}=useContext(cartcontext);
    
  return (
    <>
    <section>
        <h1 className="wishlist-header my-4 mx-5" style={{color:"var(--content-color)"}}>Wish list</h1>
        <div className="wishlist-body my-5 mx-2 d-flex " style={{gap:"4%",flexWrap:"wrap"}}>
        {Wishlist.map((product)=>(
            <>
            <div className="card my-3 col-2" key={product.id}>
            <i id='heart' class="fa-solid fa-heart heart active" onClick={()=>HandelAddtoWishlist(product.product)}></i>
            <i class="fa-solid fa-cart-plus" onClick={()=>handleAddToCart(product.product)}></i>
            <img src={product.product.images} className="card-img-top" alt="..."/>
            <div className="card-content">
                <p className='brand'>{product.product.brand}</p>
            <h6 className="card-title titel">{product.product.titel}</h6>
            <p className="price">${product.product.price}</p></div>
            </div>
        </>
        ))}
        </div>
    </section>
    <Allcart/>
    </>
  )
}

export default Wishlist