import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
        <div className="nav  ">
                  <NavLink to="/">
                    <div>
                    <img className="logo" src="https://companieslogo.com/img/orig/SHOP_BIG-cc7ba62b.png?t=1633439432" alt=""/>
                    </div>
                  </NavLink>
                  
                    
                 <div className="navbody">
                    <NavLink to="/">
                    <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="icondiv">
                        <FaShoppingCart className="fa text-2xl"/>
                        {
                          cart.length > 0 && 
                          <span className="icon w-5 ">{cart.length}</span>
                        }
                       
                        </div>
                    </NavLink>
                    
                 </div>   

        </div>
    </div>
  )
}

export default Navbar