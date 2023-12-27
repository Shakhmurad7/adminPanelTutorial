import React from 'react'
import Navbar from '../layout/Navbar'
import '../index.css'
import { FaAngleDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function Home() {
  return (
    <>
    <div className="Home-comtainer">
    <Navbar/>

    <div className="Home-right">
      <div className="home-container-block-top">
        <div className="home-block-top">
            <div className="home-block-left">
              <h3>USER</h3>
              <h1>100</h1>
              <p>See all users</p>
            </div>
            <div className="home-block-right">
              <div className="home-block-icon">
                <FaAngleDown />
                <p>20 %</p>
              </div>
              <FaUser className='Fauser' />  
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home