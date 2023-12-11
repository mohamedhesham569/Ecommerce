import React from 'react'
import "../pages/contact.css"
import Allcart from '../components/Allcart';


function Contact() {
  return (
    <div>
      <section class="google-map-code">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38647.474328137505!2d-73.90983678777148!3d40.67903321195057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1689096405446!5m2!1sar!2seg" width="600" height="450" style={{border:"0;",width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
        </section>
        <section>
          <div className="row contact-section">
            <div className="col-5 send-form"><div className="send-massage">
                <h2 style={{margin:"20px 14px"}}>send massage</h2>
                <form action="">
                    <div className="input-box">
                        <input type="text" required placeholder='Name'/>
                    </div>
                        <div className="input-box">
                            <input type="number" required placeholder='phone number'/>
                    </div>
                        <div className="input-box">
                            <input type="email" required placeholder='email'/>
                        <span></span>
                    </div>
                    <div className="input-box">
                        <textarea name="message" id="message" cols="30" rows="5" placeholder='type your massage'></textarea>
                    </div>
                    
                    <input type="submit" value="send" className="send"/>
                </form>
                </div>
                </div>
                <div className="col-5 getint">
                  <h2 style={{margin:"20px 14px"}}>Get In Touch With Us</h2>
                  <div className="contact-with-us">
                    <div className="d-flex">
                    <i class="fa-solid fa-house"></i>
                      <p>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
                    </div>
                    <div className="d-flex">
                    <i class="fa-solid fa-phone"></i>
                      <p>(+91)7-723-4608</p>
                    </div>
                    <div className="d-flex">
                    <i class="fa-solid fa-envelope"></i>
                      <p>demo@company.com</p>
                    </div>
                    <div className="d-flex">
                    <i class="fa-solid fa-info" style={{ width: "16px"}}></i>
                      <p>Monday – Friday 10 AM – 8 PM</p>
                    </div>
                  </div>
                </div>
          </div>
        </section>
        <Allcart/>
    </div>
  )
}

export default Contact