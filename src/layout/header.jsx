import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoMoon } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import '../index.css'
function Header() {
  return (
    <div className="header-container">
        <div className="header-left">
            <h2>Lamadmin</h2>
        </div>
        <div className="haeedr-right">
            <div className="header-world">
                 <TbWorld />
                <p>English</p>
            </div>
            <div className="mood">
                 <IoMoon />
            </div>
            <div className="messaj">
                <FaRegMessage />
            </div>
            <div className="bell">
                 <FaRegBell />
            </div>
            <div className="menu">
                <IoMdMenu />
            </div>
            <div className="header-img">
                <img src={'./img/IMG_20221231_160643.jpg'} />
            </div>
        </div>
    </div>
  )
}

export default Header