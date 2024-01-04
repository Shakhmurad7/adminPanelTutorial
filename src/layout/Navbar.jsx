import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiLogin } from "react-icons/ci";
import '../index.css' 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar-container">
        <ul>
            <p className='nav-item'>MAIN</p>
                <Link to={'/Dashboard'}>
            <li>
                <MdDashboard />
                <p>Dashboard</p>
            </li>
                </Link>
            <p className='nav-item'>LISTS</p>
            <li>
                <Link to={'/user'}>
                <FaUser />
                <p>Users</p>
                </Link>
            </li>
            <li>
                 <MdOutlineProductionQuantityLimits />
                <p>Products</p>
            </li>
            <li>
                <FaRegCreditCard /> 
                <p>Orders</p>
            </li>
            <li>
                <FaTruckFast />
                <p>Delivery</p>
            </li>
            <p className='nav-item'>USEFUL</p>
            <li>
                <Link to={"/Status"}>
                <IoStatsChartSharp />
                <p>Stats</p>
                </Link>
            </li>
            <li>
                <FaRegBell/>
                <p>Notifications</p>
            </li>
            <p className='nav-item'>SERVICE</p>
            <li>
                <MdOutlineSettingsSystemDaydream /> 
                <p>System Health</p>
            </li>
            <li>
                <GiBrain />
                <p>Logs</p>
            </li>
            <li>
                 <CiSettings />
                <p>Setting</p>
            </li>
            <p className='nav-item'>USER</p>
            <li>
                <VscAccount />
                <p>Profile</p>
            </li>
            <li>
                <CiLogin />
                <p>Logout</p>
            </li>
        </ul>
    </div>
  )
}

export default Navbar