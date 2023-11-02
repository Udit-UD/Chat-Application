import React from 'react'
import "./Infobar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaGun } from "react-icons/fa6";

export const Inforbar = ({room}) => {
  return (
    <div className='infobar'>
        <div className="leftInnerContainer">
            <FaGun className='logo'/>
            <h3 className='roomHeading'>{room}</h3>
        </div>
        
        <div className="RightInnerContainer">
            <a href="/">
                <AiFillCloseCircle className='close-icon'/>
            </a>
        </div>
    </div>
  )
}
