import React from 'react';
import './ContactUs.css';
import image1 from '../../assets/Sunset/address.jpeg';
import image2 from '../../assets/Sunset/contact.jpeg';
import image3 from '../../assets/Sunset/message.jpeg';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
function ContactUs() {
  return (
    <>
      <NavBar/>
      <div className='ContactContainer'>
        <h1 className='aboutHeading1'>“Your thoughts matter to us, so drop us a line and let's start a conversation today."</h1>
        <div className='container-fluid ContactContainer2'>
          <div className='row justify-content-center'>
            <div className='col-md-4 col-sm-12'>
              <img src={image1} alt='Image 1' className='img-fluid rounded-circless' />
              <h1 className='contH1' style={{ color: 'white', paddingLeft: '110px' }}>Address</h1>
              <p style={{ color: 'gray', paddingLeft: '50px' }}>MFC Center, Railway Station, Amazing Hotel, near Raipur, Raipur, Chhattisgarh 492001</p>
            </div>
            <div className='col-md-4 col-sm-12'>
              <img src={image2} alt='Image 2' className='img-fluid rounded-circless' />
              <h1 className='contH2' style={{ color: 'white', paddingLeft: '140px' }}>Phone</h1>
              <p className='paraCp2' style={{ color: 'gray', paddingLeft: '140px' }}>+91 9874523651</p>
            </div>
            <div className='col-md-4 col-sm-12'>
              <img src={image3} alt='Image 3' className='img-fluid rounded-circless' />
              <h1 className='contH3' style={{ color: 'white', paddingLeft: '150px' }}>E-Mail</h1>
              <p className='paraCp3' style={{ color: 'gray', paddingLeft: '120px' }}>SunSetCafe@gmail.com</p>
            </div>
          </div>
          <hr style={{ color: 'white' }}></hr>
        </div>
      </div>
      {/* second container */}
      <div className="containeConact2">
        <h1>Contact us</h1>
        <div className="container secontContact">
          <div className="row">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control btnCont" id="exampleFormControlInput1"
                    placeholder="Your Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control btnCont1" id="exampleFormControlInput2"
                    placeholder="Your E-mail" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="datetime-local" className="form-control btnCont" id="exampleFormControlInput1"
                    placeholder="Date & Time" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control btnCont1" id="exampleFormControlInput2"
                    placeholder="Your E-mail" />
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control textArea" id="exampleFormControlTextarea1" rows="3"
                  placeholder="Text Area"></textarea>
              </div>
              <div className="d-grid gap-2 d-md-block">
                <button className="btn cbtn" type="button">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default ContactUs;
