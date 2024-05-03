import React from 'react'
// import SecondNav from '../secondNavbar/secondNavbar';
import { Link } from 'react-router-dom';
import fLogo from '../../assets/Sunset/forgot.png'
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
function ForgotPassword() {
  return (
    <>
    {/* <SecondNav /> */}
    <NavBar/>
    <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={fLogo} alt="" width="50%" height="auto" style={{ paddingTop: '110px', marginLeft: '50px', paddingBottom: '25px' }} />
                </div>
                <div className="col-md-6">
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h2 className="text-center">Forgot Password ?</h2>
                                <div className="border p-5 mb-5">
                                    <p style={{ color: 'orangered' }}>Enter the Email address associated with your account to get a code.</p>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Enter Email Address" />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-cream" style={{ backgroundColor: '#F0AD90' }} type="button">Send Code</button>
                                        </div>
                                    </form>
                                    {/* Removed <a> tag and replaced with <Link> */}
                                    <Link to="/auth" style={{ textDecoration: 'none', textAlign: 'center', color: 'black' }}>
                                        <p>Back to Login</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}
export default ForgotPassword