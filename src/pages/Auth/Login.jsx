import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
// import SecondNav from '../secondNavbar/secondNavbar';
// import Footer from '../Footer/footer'
import logoLogin from '../../assets/Sunset/login-bro.png'
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
function LogIn() {
  return (
   <>
   {/* <SecondNav /> */}
   <NavBar/>
   <div className="container" style={{backgroundColor:"white"}}>
      <div className="row">
        {/* Container 1 */}
        <div className="col-md-6">
          {/* Login section */}
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10"> {/* Adjusting column width for responsiveness */}
                <h2 className="text-center">Log In</h2>
                <div className="border p-4 mb-4"> {/* Reduced padding for smaller devices */}
                  <p style={{ color: 'orangered' }}>Log in to your Account</p>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <Link to="/forgotPassword" style={{ textDecoration: 'none', justifyContent: 'end' }}>
                      <p style={{ color: 'lightslategray' }}>Forgot Password?</p>
                    </Link>
                    <div className="d-grid gap-2">
                      <button className="btn btn-cream" type="button" style={{ backgroundColor: '#F0AD90', color: 'lightslategray' }}>Submit</button>
                    </div>
                    <p className="text-center mt-3" style={{ fontSize: 'smaller', color: 'orangered' }}>
                      If You Don't have an Account?
                      <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <button type="button" className="btn btn-primary btn-cream" style={{ fontSize: '0.75rem', backgroundColor: '#F0AD90', color: 'black' }}>Sign up</button>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container 2 */}
        <div className="col-md-6">
          {/* Content for the second container goes here */}
          <img src={logoLogin} alt="" srcSet="" className="img-fluid" style={{paddingTop:'35px', width:'100%',height:'80vh'}} /> {/* Added img-fluid class for responsiveness */}
        </div>
      </div>
    </div>
   <Footer/>
   </>
  )
}
export default LogIn;