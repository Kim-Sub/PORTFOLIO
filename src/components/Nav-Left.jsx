import React from "react"
import {Link, NavLink} from 'react-router-dom';
import NightModeBtn from '../components/NightMode-Btn';


// 아이콘 import
import { BsGit } from "react-icons/bs"; 
import { FaNeos } from "react-icons/fa"; 
import { BsFacebook } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 



const NavLeft = () => {

   const activeStyle={
      color:'lavender',
      borderBottom : '1px solid lavender',
      borderRight : '5px solid lavender',
      background : '#9eb3a850'
  }
  

   return (
      <header id='NavLeft'>
            <h1>
               <NavLink to='/'>
               Logo
               </NavLink>
            </h1>
            <ul className="nav">
                <li><NavLink to="/" style={({isActive}) => (isActive ? activeStyle: undefined)} activeclassName="active">HOME</NavLink></li>
                <li><NavLink to="/CONTACT" style={({isActive}) => (isActive ? activeStyle: undefined)} activeclassName="active">CONTACT</NavLink></li>
                <li><NavLink to="/PORT" style={({isActive}) => (isActive ? activeStyle: undefined)} activeclassName="active">PORT</NavLink></li>
                <li><NavLink to="/DEV" style={({isActive}) => (isActive ? activeStyle: undefined)} activeclassName="active">DEV</NavLink></li>
            </ul>
            <ul className="sns">
               <li><Link to="https://github.com/Kim-Sub?tab=repositories" target='blank_'><BsGit style={{color:'#E84E31'}} /></Link></li>
               <li><Link to="https://blog.naver.com/powersub1101" target='blank_'><FaNeos /></Link></li>
               <li><Link to="https://www.instagram.com/russianblue.cloud/" target='blank_'><BsInstagram /></Link></li>
               <li><Link to="" target='blank_'><BsFacebook /></Link></li>
            </ul>
            <div>
               <span>NightMode</span>
               <NightModeBtn />
               <em>UPDATA.</em>
               <span>2024-01-04</span>
            </div>
            <div className="nav-Cover">
               ▲ MENU ▼
            </div>
      </header>
   )
}

export default NavLeft
