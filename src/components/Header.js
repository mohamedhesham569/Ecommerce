import React, { useEffect, useState } from 'react';
import {NavLink,Link} from 'react-router-dom'
import { Search } from "react-bootstrap-icons";
import { useContext } from 'react';
import cartcontext from '../components/Context';
import "./header.css";

function Header() {
  function handelbar(){
    document.querySelector(".insidebar").style.right="0";
  }
  function closebar(){
    document.querySelector(".insidebar").style.right="-100%";
  }
  function handelcart(){
    document.querySelector(".cart").style.right="0";
    document.querySelector(".insidebar").style.right="-100%";
  }

  const{count}=useContext(cartcontext);
  const{total_price}=useContext(cartcontext);

  useEffect(()=>{
    const toggleButton = document.getElementById('toggleButton');
    const nighticon = document.getElementsByClassName("inner");
let isToggled = false;
const root = document.documentElement;

toggleButton.addEventListener('click', () => {
  isToggled = !isToggled; // Toggle the state
  // nighticon.toggleClass("icon-active");
  console.log(nighticon.classList);
  if (isToggled) {
    // Perform some action when the button is toggled on
    root.style.setProperty('--main-bg-color', '#131921');
    root.style.setProperty('--secound-bg-color', '#232f3e');
    root.style.setProperty('--icon-color', '#febd69');
    root.style.setProperty('--content-color', '#d6d3d3');
    root.style.setProperty('--content-color2', '#c1121f');
    root.style.setProperty('--card-color', 'black');
    root.style.setProperty('--category', '#131921');
    root.style.setProperty('--night-icon', 'white');
    
    // console.log(nighticon.classList);
    // nighticon.classList.add("");
  } else {
    // Perform some action when the button is toggled off
    root.style.setProperty('--main-bg-color', '#f8f9fa');
    root.style.setProperty('--secound-bg-color', 'white');
    root.style.setProperty('--icon-color', 'black');
    root.style.setProperty('--content-color', 'black');
    root.style.setProperty('--content-color2', 'black');
    root.style.setProperty('--card-color', 'white');
    root.style.setProperty('--category', 'white');
    root.style.setProperty('--night-icon', '#febd69');
    console.log("Toggled Of")
  }
});
  })
  
  return (
    <>
    <header className="header-top-strip py-1">
      <div className="container-xxl">
        <div className="row justify-content-between">
          <div className="col-4 d-flex h-text" style={{gap:"10px"}}>
            <p>Free shipping over $100</p>
            
          </div>
          <div className='col-2'><label id="toggleButton" htmlFor="inner">
              <div className="inner" id='inner' onClick={(e)=>{ e.target.classList.toggle("icon-active")}}></div>
            </label></div>
          
          <div className="col-4 h-text">
            <p className='text-end'>Hotline:<a href="tel:+20 1011111111">+20 1011111111</a></p>
            
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-1'>
      <div className="row justify-content-between align-items-center container-xl" style={{flexWrap:"nowrap", overflow:"hidden", margin:"auto"}}>
        <div className="col-2" style={{position:"relative",marginBottom:"13px",padding:"0",margin:"0 5px" }}>
          <Link style={{fontSize:"1.2em"}} className='mzone' ><marker style={{ color:'#febd69'}}>M</marker> zone</Link>
        </div>

        <div className="col-5 search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Here..." aria-label="Search Here..." aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">
          <Search/>
          </span> 
          </div>
        </div>

        <div className="header-upper-links col-5 align-items-center justify-content-between">
          <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="images/images/compare.svg" alt="compare" />
            <p className='mb-0 fs7'>compare <br/> products</p>
            </Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10' to="/Wishlist">
            <img src="images/images/wishlist.svg" alt="wishlist" />
            <p className='mb-0 fs7'>Favourit <br/> wishlist</p>
            </Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10' to="/Login">
            <img src="images/images/user.svg" alt="user" />
            <p className='mb-0 fs7'>log in <br/>my Account</p>
            </Link>
          </div>
          <div className='cartall'>
            <Link className='d-flex align-items-center gap-10' >
            <img src="images/images/cart.svg" alt="cart" onClick={handelcart}/>
            <span className='numItems' onClick={handelcart}>{count}</span>
            <div className="d-flex flex-column gap-10">
              <p className='mb-0' onClick={handelcart}>${total_price.toFixed(2)}</p>
            </div>
            </Link>
          </div>
          
        </div>
        <div className="insidebar" style={{right:"-100%"}}>
        <button onClick={closebar}> <i class="fa-solid fa-xmark fs-3" style={{color:"gray"}}></i> </button>
        <div>
            <Link className='d-flex align-items-center gap-10'>
            <img src="images/images/compare.svg" alt="compare" />
            <p className='mb-0 fs7'>compare <br/> products</p>
            </Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10' to="/Wishlist">
            <img src="images/images/wishlist.svg" alt="wishlist" />
            <p className='mb-0 fs7'>Favourit <br/> wishlist</p>
            </Link>
          </div>
          <div>
            <Link className='d-flex align-items-center gap-10' to="/Login">
            <img src="images/images/user.svg" alt="user" />
            <p className='mb-0 fs7'>log in <br/>my Account</p>
            </Link>
          </div>
          <div className='cartall'>
            <Link className='d-flex align-items-center gap-10' >
            <img src="images/images/cart.svg" alt="cart" onClick={handelcart}/>
            <span className='numItems' onClick={handelcart}>{count}</span>
            <div className="d-flex flex-column gap-10" style={{margin:"0"}}>
              <p className='mb-0' style={{fontSize:"0.5em"}} onClick={handelcart}>${total_price.toFixed(2)}</p>
            </div>
            </Link>
          </div>
        </div>
        <div className="bar col-2" onClick={handelbar}><i class="fa-solid fa-bars"style={{fontSize:"1.4rem"}}></i></div>
        
      </div>
    </header>
    <header className="header-bottom py1">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center py-1">
              <div>
              <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>categories</span>
                  </button>
          <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
            <li><Link className="dropdown-item fs7" to="/OurStore">laptops</Link></li>
            <li><Link className="dropdown-item fs7" to="/OurStore">head phones</Link></li>
            <li><Link className="dropdown-item fs7" to="/OurStore">mobile</Link></li>
          </ul>
              </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center fs8" style={{gap:'0.5em'}}>
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'/OurStore'}>our store</NavLink>
                  <NavLink to={'/contact'}>contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header