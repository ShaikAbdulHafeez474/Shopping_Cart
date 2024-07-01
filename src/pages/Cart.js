import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const[totalamount,settotalamount]=useState(0);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div >
     {
        cart.length>0?
        (<div className="cart" >

           <div className="cartitems">
           {
              cart.map((item,index)=>(
                <Cartitem key={index} item={item} itemindex={index}/>
              ))
           }


          </div>
          <div className="summary">
          <div >
             <div className="ycart ">
              Your Cart
              </div>
              <div className="sum">
                Summary
                </div>

              <p className="totalitem">
                <span>Total Items : {cart.length}</span>
              </p>
              

            </div>
            <div className="btsec">
               <p className="totalamt">Total Amount : ${totalamount}</p>

               <button className="check">Checkout Now</button>
              </div>

            </div>
          </div>):
        (
          <div className="cartempty">
          <h1>Cart Empty</h1>
          <Link to="/">
           <button className="shopbt">
            Shop Now
           </button>
          </Link>
          </div>
        )
     }
    </div>
  )
}

export default Cart