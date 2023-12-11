import React from 'react';
import"./footer.css";
import {Link} from 'react-router-dom';
import { Linkedin,Instagram,Facebook,Twitter,Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
    <footer className='mb-0'>
      <div className="container-xxl">
        <div className="row f-row ">
          <div className="d-flex col-5 my-3 gap-15 align-items-center">
            <img src="images/images/newsletter.png" alt="newsletter"  />
            <h4 className='fs8'>sign up for newsletter</h4>
          </div>
          <div className="col-6 my-3">
          <div className="input-group">
            <input type="email" className="form-control" placeholder="your email" aria-label="your email" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">
          subscribe
          </span> 
          </div>
          </div>
        </div>
        <div className="row s-row">
          <div className="col-3 my-4">
            <h5>contact us</h5>
            <p className='fs8'>demo store <br/>
              no.1259 freedom,new york,11111<br/>
              united states<br/>
              +91-987654321<br/>
              demo@example.com
            </p>
            <div className="icons d-flex gap-15">
              <span><a href="#"><Linkedin/></a></span>
              <span><a href="#"><Instagram/></a></span>
              <span><a href="#"><Facebook/></a></span>
              <span><a href="#"><Youtube/></a></span>
              <span><a href="#"><Twitter/></a></span>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex my-4">
            <ul className='fs8'>
              <li>information</li>
              <li><Link>privacy</Link></li>
              <li><Link>refund policy</Link></li>
              <li><Link> shipping policy</Link></li>
              <li><Link>terms of service</Link></li>
              <li><Link>blogs</Link></li>
            </ul>
            <ul className='fs8'>
              <li>account</li>
              <li><Link>search</Link> </li>
              <li><Link> about us</Link></li>
              <li><Link>faq</Link></li>
              <li><Link>contact</Link></li>
              <li><Link>size chart</Link></li>
            </ul>
            <ul>
              <li>quick links</li>
              <li><Link>accessorise</Link> </li>
              <li><Link>laptops</Link></li>
              <li><Link>headphones</Link></li>
              <li><Link>smart watches</Link></li>
              <li><Link>tablets</Link></li>
            </ul>
          </div>
          <div className="col-3 my-4">
            <h5>our app</h5>
            <p className='fs8'>downloud our app and get 15% discount on your first order...!</p>
            <div className='' >
              <img src="https://demo-digitic.myshopify.com/cdn/shop/files/app-icon-01.png?v=1654931267" alt="googleplay"style={{margin:"10px",cursor:"pointer"}} />
            </div>
              <img src="https://demo-digitic.myshopify.com/cdn/shop/files/app-icon-02.png?v=1654931286" alt="playstore" style={{margin:"10px",cursor:"pointer"}}/>
            
          </div>
        </div>
        <div className="mt-1 copyright">
          <p><div id="copyright">&copy:{new Date().getFullYear()};powerd by mohamed hisham</div></p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer