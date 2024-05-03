import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import {Home} from "../pages/Home/Home";
import Menu1 from "../pages/Menu/Menu1"
import {Blog} from "../pages/Blog/Blog";
import { BlogPageStruct } from '../pages/Blog/BlogPageStruct';
import { MenuStructure } from '../pages/MenuStructure/MenuStructure';
// import { Auth } from '../pages/Auth/Auth';
import Login from '../pages/Auth/Login';
import ForgotPassword from "../pages/Auth/ForgotPassword"
import SignUp from "../pages/Auth/SignUp"
import ContactUs from '../pages/ContactUs/ContactUs';
import { Cart } from '../pages/Cart/Cart';
export const AllRouting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/auth" Component={Login}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
        <Route exact path="/forgotPassword" Component={ForgotPassword}></Route>
        <Route exact path="/contactUs" Component={ContactUs}></Route>
        {/* <Route exact path="/mycart" Component={Cart}></Route> */}

        <Route exact path="/Menu" Component={Menu1}></Route>
        <Route exact path="Menu/menu1" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu2" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu3" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu4" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu5" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu6" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu7" Component={MenuStructure}></Route>
        <Route exact path="/Menu/menu8" Component={MenuStructure}></Route>
        <Route exact path="/Blog" Component={Blog}></Route>
        <Route exact path="/Blog1" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog2" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog3" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog4" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog5" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog6" Component={BlogPageStruct}></Route>
        <Route exact path="/Blog7" Component={BlogPageStruct}></Route>
      </Routes>
    </Router>
  )
}
