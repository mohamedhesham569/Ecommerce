import React, { useState } from 'react';
import "../pages/Login.css";
import { Link } from 'react-router-dom';
function Login() {
    const[action,setAction]=useState("login");

  return (
    <>
    <section className='l-section'>
        <div className="container-xxl">
            <div className="l-header">
                <h2><marker style={{ color:'#febd69'}}>M</marker> zone</h2>
                
            </div>
            <div className="login-form">
                <div className="login-img">
                    <img src="images/images/149071.png" alt="user" />
                </div>
            <div className="login-header">login</div>
            <form action="">
                {action==="sign up"?(<>
                <label htmlFor="userName" className='login-lable'>
                <i class="fa-solid fa-user"></i>
                <input type="text" name="name" id="userName" placeholder='Name' required/>
                </label>
                </>):null}
                
                <label htmlFor="email" className='login-lable'>
                <i class="fa-solid fa-envelope"></i>
                <input type="email" name="email" id="email" placeholder='Email' required/>
                </label>
                <label htmlFor="password" className='login-lable' style={{marginBottom:"0px"}}>
                <i class="fa-solid fa-lock"></i>
                <input type="password" name="password" id="password" placeholder='Password' required/>
                </label>
                <Link style={{margin:"0px 20px"}} className='f-password'>forget Password ?</Link>
                
                <input id='continue' className={action==="login"?"login-active":"gray"} type="submit" value="continue" onClick={()=>{setAction("login")}} />
            </form>
            
        </div>
                    
                    {action==="sign up"?null:<>
                    <div className="new-to-mzone">
                        <p>New to Mzone?</p>
                    </div>
                    <input id='sign-up' className={action==="sign up"?"login-active":"gray"} type="submit" value="sign up" onClick={()=>{setAction("sign up")}}/></>}
                    
                    </div>
    </section>
    </>
  )
}

export default Login