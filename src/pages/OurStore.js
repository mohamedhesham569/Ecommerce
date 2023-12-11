import React, { useState ,useContext } from 'react';
import "../pages/ourstore.css"
import laptops from "../data/laptops.json";
import mobile from "../data/mobile.json";
import Headphones from "../data/headphones.json";
import Allcart from '../components/Allcart';
import cartcontext from '../components/Context';



export function OurStore() {
    const{handleAddToCart}=useContext(cartcontext);
    const [CardData,setCardData]=useState(Headphones);
    const [Carditemsnum,setCarditemsnum]=useState(mobile.length);
    const{PopupMessage}=useContext(cartcontext);
    const{showPopup}=useContext(cartcontext);

    const Setdatamobile =(e) => {
    setCardData(mobile);
    setCarditemsnum(mobile.length);
    document.querySelector(".category_item.active").classList.remove("active");
    e.target.classList.add("active");
    
    };
    const Setdatalaptops =(e) => {
    setCardData(laptops);
    setCarditemsnum(laptops.length);
    document.querySelector(".category_item.active").classList.remove("active");
    e.target.classList.add("active");
    };
    const SetdataHeadphones =(e) => {
    setCardData(Headphones);
    setCarditemsnum(Headphones.length);
    document.querySelector(".category_item.active").classList.remove("active");
    e.target.classList.add("active");
    };
    return (
    <>
    <section>
        <div className="container-xxl p-relative">
        {showPopup?(<PopupMessage message={<>
      <div className="addicon">
        <i class="fa-regular fa-circle-check justify my-1" style={{fontSize:"50px"}}></i></div>
      <h2 className='justify my-1' style={{    padding:" 5px 0px 20px;"}}>Item added to cart.</h2>
      </>} show={showPopup} />):null }
            <div className="row my-4">
                <div className="col-3 category_items">
                    <div className="filter-header fs7">filter by</div>
                    <div className="category_item active d-flex" onClick={SetdataHeadphones}>
                    <img src="images/images/headphone-removebg-preview.png" alt="watch" />
                    <p className="category_name fs8">headphones</p>
                </div>
                <div className="category_item d-flex" onClick={Setdatamobile} >
                    <img src="images/images/tab1-removebg-preview.png" alt="watch" />
                    <p className="category_name fs8">Mobile</p>
                </div>
                <div className="category_item d-flex" onClick={Setdatalaptops}>
                    <img src="https://demo-digitic.myshopify.com/cdn/shop/files/cat-icon-02.png?v=1655700520" alt="watch" />
                    <p className="category_name fs8">laptops</p>
                </div>
                </div>
                <div className="col-8 display-cards">
                    <div className='row'>
                        <div className="display-choice">
                            <div className="sort-by">
                            <p className='fs7'>sort by:</p>
                            <select className='fs7' name="sort-selection" id="sort-selection">
                                <option value="Featured">Featured Products</option>
                                <option value="popular">Popular Products</option>
                            </select>
                            </div>
                            <div className="display-by d-flex">
                                <div className="items-number fs7">{Carditemsnum} items</div>
                                    <button className='display-btn active' id='d-btn-4' onClick={(e)=>{
                                        document.querySelector(".display-btn.active").classList.remove("active");
                                        e.target.classList.add("active");
                                    }}><i class="fa-solid fa-bars fa-rotate-90 fs8" ></i></button>
                                    <button className='display-btn ' id='d-btn-1' onClick={(e)=>{
                                        document.querySelector(".display-btn.active").classList.remove("active");
                                        e.target.classList.add("active");
                                    }}><i class="fa-solid fa-list fs8"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row cards-row">
                            {CardData.map((product =>(
                                    <>
                                    <div className="card col-2" key={product.id}>
                                    <i class="fa-regular fa-heart heart"></i>
                                    <i class="fa-solid fa-cart-plus" onClick={()=>handleAddToCart(product)}></i>
                                    <div className="card-image"><img src={product.images} className="card-img-top" alt="..."/></div>
                                    
                                    <div className="card-content">
                                        <p className='brand'>{product.brand}</p>
                                    <h6 className="card-title fw-bolder titel">{product.titel}</h6>
                                    <p className="price">${product.price}</p></div>
                                    </div>
                                </>
                            )))}
                        </div>
                    </div>
                </div>
                <Allcart />
        </div>
    </section>
    </>
    )
}

export default OurStore;