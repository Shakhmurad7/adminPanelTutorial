import React from 'react'
import Navbar from '../layout/Navbar'
import '../index.css'
import { FaAngleDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { ImCoinEuro } from "react-icons/im";
import { CiWallet } from "react-icons/ci";  
import CircularProgressBar from '../layout/CircularProgressBar';
import { FiMoreVertical } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import ReCharts from '../layout/ReCharts';
import PageContainer from './PageContainer';

function Home() {

  return (
    <>
    <PageContainer>



    <div className="Home-right">

      <div className="home-container-block-top">
        <div className="home-block-top">
            <div className="home-block-left">
              <h3>USERS</h3>
              <h1>100</h1>
              <p>See all users</p>
            </div>
            <div className="home-block-right">
              <div className="home-block-icon">
                <FaAngleDown />
                <p>20 %</p>
              </div>
              <FaUser className='Fauser-1' />  
            </div>
        </div>
        <div className="home-block-top">
            <div className="home-block-left">
              <h3>ORDESR</h3>
              <h1>100</h1>
              <p>View all ordesr</p>
            </div>
            <div className="home-block-right">
              <div className="home-block-icon">
                <FaAngleDown />
                <p>20 %</p>
              </div>
              <SlBasket className='Fauser-2' />
        
            </div>
        </div>
        <div className="home-block-top">
            <div className="home-block-left">
              <h3>EARNINGS</h3>
              <h1>100</h1>
              <p>View net earnings</p>
            </div>
            <div className="home-block-right">
              <div className="home-block-icon">
                <FaAngleDown />
                <p>20 %</p>
              </div>
              <ImCoinEuro  className='Fauser-3' />  
            </div>
        </div>
        <div className="home-block-top">
            <div className="home-block-left">
              <h3>BALANCE</h3>
              <h1>100</h1>
              <p>See details</p>
            </div>
            <div className="home-block-right">
              <div className="home-block-icon">
                <FaAngleDown />
                <p>20 %</p>
              </div>
              <CiWallet className='Fauser-4' />  
            </div>
        </div>
      </div>

<div className="home-center">
      {/* ---CircularProgressBar--- */}
      <div className="progress-card">

      <div className="progress-cart-top-text">
        <h3>Total Revebue</h3>
        <FiMoreVertical />
      </div>

        <div className="CircularProgressBar">
          <CircularProgressBar/>
            <h3>Total Sales made today</h3>
            <h1>$540</h1>
            <p>Previous transaction .Last payments may not be inclused</p>
        </div>

        <div className="progress-botton">
          <div className="progress-botton-block">
            <h2>Targer</h2>
            <div className="progress-icon one">
              <FaAngleDown />
              <p>$12.5k</p>
            </div>
          </div>

          <div className="progress-botton-block">
            <h2>Last week</h2>
            <div className="progress-icon two">
              <FiChevronUp />
              <p>$12.5k</p>
            </div>
          </div>

          <div className="progress-botton-block">
            <h2>Last month</h2>
            <div className="progress-icon three">
              <FiChevronUp />
              <p>$12.5k</p>
            </div>
          </div>

        </div>
      </div>
      {/* ----reCharts--- */}
      <div className="ReCharts">
        <h2>Last 6 month (Revenue)</h2>
        <ReCharts/>
      </div>
</div>



    </div>

  
    </PageContainer>
    </>
  )
}

export default Home