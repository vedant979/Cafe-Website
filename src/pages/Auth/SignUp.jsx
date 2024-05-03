import React from 'react'
// import './signup.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import SecondNav from '../secondNavbar/secondNavbar';
// import Footer from '../Footer/footer';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
function Signup() {
  return (
    <>
   <>
   <NavBar/>
   <div className=" container mt-5" style={{backgroundColor:"white", width:"100%", height:"100%"}}>
      <div className="row justify-content-center" style={{height:"90%"}}>
        <div className="col-md-6">
          <h2 className="text-center">Register</h2>
          <div className="border p-5 mb-5">
            {/* Your form goes here */}
            <p style={{ color: 'orangered' }}>Signup now and get full access to our app.</p>
            <form>
              {/* Form fields go here */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-cream" type="button" style={{ backgroundColor: '#F0AD90' ,whiteSpace:'nowrap'}}>Register Here !</button>
              </div>
              <p className="text-center mt-3" style={{ fontSize: 'smaller', color: 'orangered' }}>Already have an Account?
                <Link to="/auth" style={{ textDecoration: 'none' }}>
                  <button type="button" className="btn btn-primary btn-cream" style={{ padding: '.25rem .5rem', fontSize: '0.75rem', backgroundColor: '#F0AD90', color: 'black' }}>Log In</button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
   </>
    </>
  )
}
export default Signup;