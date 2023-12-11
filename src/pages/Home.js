import React, { useState,useContext } from 'react';
import "./home.css";
import {Link} from 'react-router-dom';
import products from "../data/features-products.json";
import ControlledCarousel from "../components/Carousel";
import Marquee from "react-fast-marquee";
import reports from "../data/reports.json";
import laptops from "../data/laptops.json";
import mobile from "../data/mobile.json";
import Reportcards from "../components/Report-card";
import OwlCarousel from "react-owl-carousel";
import "../components/card.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Allcart from '../components/Allcart';
import cartcontext from '../components/Context';
import Carsoul from '../components/Carsoul';


function Home() {
  const{handleAddToCart}=useContext(cartcontext);
  const{showPopup}=useContext(cartcontext);
  const{PopupMessage}=useContext(cartcontext);
  const{HandelAddtoWishlist}=useContext(cartcontext);

  return (
    <>
    <section className="home-wrapper-1 my-4">
      <div className="container-xxl">
        <div className="row">


          <div className="col-md-6 col-12">
            <ControlledCarousel></ControlledCarousel>
            </div>


          <div className="col-12 col-md-6 my-1">
            <div className="row r-main">
              <div className="col-6" style={{height:"9rem"}}>
                <Link className='r-main-link'>
                <div className="main laptops">
                  <img src="images/images/catbanner-01.jpg" alt="laptop" />
                  <div className="content">
                    <h6 className='fs8'>best sale</h6>
                    <h4 className="text-black fs1">laptops max</h4>
                    <p className='text-dark'>from $1699 or $64.62/mo</p>
                  </div>
                </div>
                </Link>
                
              </div>
              <div className="col-6" style={{height:"9rem"}}>
              <Link className='r-main-link'>
                <div className="main ipad">
                <img src="images/images/catbanner-03.jpg" alt="ipad" />
                  <div className="content">
                    <h6 className='fs8'>new arrival</h6>
                    <h4 className="text-black fs1">buy ipad air</h4>
                    <p className='text-dark'>from $599 or $49.62/mo</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="row r-main">
            <div className="col-6" style={{height:"9rem"}}>
            <Link className='r-main-link'>
                <div className="main smart-watch">
                <img src="images/images/catbanner-02.jpg" alt="watch" />
                  <div className="content">
                    <h6 className='fs8'>15% off</h6>
                    <h4 className="text-black fs1">smartwatch 7</h4>
                    <p className='text-dark'>shop the latest band styles and colors</p>
                  </div>
                </div>
                </Link>
            </div>
              <div className="col-6" style={{height:"9rem"}}>
              <Link className='r-main-link'>
                <div className="main airpods">
                <img src="images/images/catbanner-04.jpg" alt="airpods" />
                  <div className="content">
                    <h6 className='fs8'>free engraving</h6>
                    <h4 className="text-black fs1">airpods max</h4>
                    <p className='text-dark'>high-fidelity playback & ultra-low distortion</p>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
    <section className="home-wrapper-2 my-4 py-3">

      <div className="container-xl">
        <div className="row py-5">
          <div className="col-12 d-flex advantages">
            <div className="advantage d-flex">
              <div className="ship-img"><i class="fa-solid fa-truck-fast"></i></div>
              <div className='content'><h5 className='fw-bolder fs1'>free shipping</h5>
              <p>from all orders over $100</p></div>
            </div>
            <div className="advantage d-flex">
              <div className="ship-img"><i class="fa-solid fa-gift"></i></div>
              <div className='content'><h6 className='fw-bolder fs1'>daily surprise offers</h6>
              <p>save up to 25% off</p></div>
            </div>
            
            <div className="advantage d-flex">
              <div className="ship-img"><i class="fa-solid fa-tag"></i></div>
              <div className='content'><h6 className='fw-bolder fs1'>affordable prices</h6>
              <p>get factory direct price</p></div>
            </div>
            <div className="advantage d-flex">
              <div className="ship-img"><i class="fa-solid fa-money-bill"></i></div>
              <div className='content'><h6 className='fw-bolder fs1'>secure payments</h6>
              <p>100% protected payment</p></div>
            </div><div className="advantage d-flex">
              <div className="ship-img"><i class="fa-solid fa-headphones"></i></div>
              <div className='content'><h6 className='fw-bolder fs1'>support 24/7</h6>
              <p>shop with an expert</p></div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-wrapper-2 categories ">
      <div className="container-xxl">
        <div className="row d-flex justify-content-around categories-row-1">
          <Link className='col-3'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div >
              <img src="images/images/laptop-removebg-preview.png" alt="laptop" />
            </div>
            <div className='content'>
              <h6 className='fw-bolder'>computers & laptops</h6>
              <p className=''>8 items</p>
            </div>
          </div>
          </Link>
          <Link className='col-3'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div >
              <img src="images/images/camera-removebg-preview.png" alt="laptop" />
            </div>
            <div className='content'>
              <h6 className='fw-bolder '>cameras % videos</h6>
              <p className=''>10 items</p>
            </div>
          </div>
          </Link>
          <Link className='col-3'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div>
              <img src="images/images/tv-removebg-preview.png" alt="laptop" />
            </div>
            <div className='content'>
              <h6 className='fw-bolder '>smart television</h6>
              <p className=''>12 items</p>
            </div>
          </div>
          </Link>
          <Link className='col-3'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div>
              <img src="images/images/speaker-removebg-preview.png" alt="laptop" />
            </div><div className='content'>
              <h6 className='fw-bolder '>speakers</h6>
              <p className=''>8 items</p>
            </div>
          </div>
          </Link>
        </div>
        <div className="row d-flex justify-content-around categories-row-2">
          <Link className='col-4'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div>
              <img src="images/images/headphone-removebg-preview.png" alt="laptop" />
            </div><div className='content'>
              <h6 className='fw-bolder '>headphones</h6>
              <p className=''>6 items</p>
            </div>
          </div>
          </Link>
          <Link className='col-4'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div>
              <img src="images/images/homeapp-removebg-preview.png" alt="laptop" />
            </div><div className='content'>
              <h6 className='fw-bolder '>home appliance</h6>
              <p className=''>6 items</p>
            </div>
          </div>
          </Link>
          <Link className='col-4'>
          <div className='d-flex align-items-center fwrap justify-content-around'>
            
            <div>
              <img src="images/images/acc-removebg-preview.png" alt="laptop" />
            </div><div className='content'>
              <h6 className='fw-bolder '>accessories</h6>
              <p className=''>10 items</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
    </section>
    
    <section className='my-4' style={{backgroundColor:"var(--main-bg-color);",padding:"10px 0px;"}}>
      <div className="Featured-Collection-title">
        <h3>Featured-Collection</h3>
      </div>
      <div className="Featured-Collection row" style={{margin:"auto"}}>
      {showPopup?(<PopupMessage message={<>
      <div className="addicon">
        <i class="fa-regular fa-circle-check justify my-1" style={{fontSize:"3em"}}></i></div>
      <h2 className='justify my-1' style={{    padding:" 5px 0px 20px;"}}>Item added to cart.</h2>
      </>} show={showPopup} />):null }
        {products.map((product)=>(
            <>
            <div className="card col-2" key={product.id}>
            <i className="fa-solid fa-heart heart" onClick={function(e){ HandelAddtoWishlist(product);e.target.classList.toggle("heart-active")}}></i>
            <i className="fa-solid fa-cart-plus" onClick={()=>handleAddToCart(product)}></i>
            <img src={product.images} className="card-img-top" alt="..."/>
            <div className="card-content">
                <p className='brand'>{product.brand}</p>
            <h6 className="card-title titel">{product.titel}</h6>
            <p className="price">${product.price}</p></div>
            </div>
        </>
        ))}
      </div>
    </section>
          <section style={{width: "100%" , padding:"30px 0px;",backgroundColor:"var(--secound-bg-color);"}}>
            <div className="row banner_wrapper" style={{width:"97%;",margin:"auto",gap:"1%"}}>
              <div className="col-3 banner_inner" style={{backgroundColor:"black"}}>
                <img className='banner_brand' src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528" alt="pic" />
                <div className="content">
                  <p style={{color:"brown"}}>big screen</p>
                  <h3 style={{color:"white"}}>Smart Watch Series 7</h3>
                  <span style={{color:"brown"}}>From $399or $16.62/mo. for 24 mo.*</span>
                </div>
              </div>
              <div className="col-3 banner_inner">
                <img className='banner_brand' src="images/images/subbanner-02-removebg-preview.png" alt="pic" />
                <div className="content">
                  <p>Studio Display</p>
                  <h3>600 nits of brightness.</h3>
                  <span>27-inch 5K Retina display</span>
                </div>
              </div>
              <div className="col-3 banner_inner">
                <img className='banner_brand' src="images/images/subbanner-03-removebg-preview.png" alt="pic" />
                <div className="content">
                  <p>smartphones</p>
                  <h3>Smartphone 13 Pro.</h3>
                  <span style={{wrap:"wrap"}}>Now in Green. From $999.00 or $41.62/mo.
for 24 mo. Footnote*</span>
                </div>
              </div>
              <div className="col-3 banner_inner">
                <img className='banner_brand' src="images/images/subbanner-04-removebg-preview.png" alt="pic" />
                <div className="content">
                  <p>home speakers</p>
                  <h3>Room-filling sound.</h3>
                  <span>From $699 or $116.58/mo. for 12 mo.*</span>
                </div>
              </div>
            </div>
          </section>

    <section className='my-3 marquee-brands'>
    <Marquee>
  <div className="marquee d-flex">
    <img src="images/images/apple-removebg-preview.png" alt="img" style={{    height: "110px;!important"}}/>
    <img src="images/images/brand-03.png" alt="img" />
    <img src="images/images/brand-04.png" alt="img" />
    <img src="images/images/brand-05.png" alt="img" />
    <img src="images/images/brand-06.png" alt="img" />
    <img src="images/images/brand-07.png" alt="img" />
    <img src="images/images/brand-08.png" alt="img" />
  </div>
</Marquee>
    </section>
    <section className='my-4'>
      <h3 className="reports_title">Our Latest News</h3>
      <div className="reports d-flex">
        {reports.map((report)=>(
          <Reportcards report={report}/>
        ))}
      </div>
    </section>
    <Allcart/>
    </>
  )
}
export default Home;