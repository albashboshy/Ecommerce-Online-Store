import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import "./header.css"
import Searchbox from './searchbox';
import { useContext } from "react";
import { CartContext } from '../context/Contextcart';
export default function Topheader() { 
  const {favorites}= useContext(CartContext);
  const {cartItems }= useContext(CartContext);
  return (
    <div className='top_header'>
        <div className="container">
            <Link to='/' className='logo'><img src="src/img/logo (2).png" alt="logoImage" /></Link>
              
              <Searchbox  className="srch"/>
              
          <div className="header_icons">
            <div className="icon">
              <Link to={'/Favorite'} >
              <FaHeart className='heart'/>
              <span className='count'>{favorites.length}</span>
              </Link>
              </div>
              <div className='icon'>
                <Link to={'/Cart'}  >
              <IoCartOutline className='cart'/>
              <span className='items_count'>{cartItems.length}</span>
              </Link>
            </div>
          </div>

        </div>
    </div>
  )
}
