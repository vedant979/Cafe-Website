import React, { useState } from 'react'
import {NavBar} from "../../components/NavBar/NavBar";
import "./Home.css"
import { Container0 } from '../../components/Container-0/Container0';
export const Home = () => {
  const[user, setUser] = useState(0);
  return (
    <div className='main-container'>
        <Container0 user={user}/>
    </div>
  )
}
