import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import { add,remove } from '../redux/Slices/cartslice';
const Product = ({post}) => {

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    function addtocart(){
         dispatch(add(post));
         toast.success("Item added to Cart");
    }

   function removefromcart(){
      dispatch(remove(post.id));
      toast.error("Item removed from Cart");
   }

    
  return (
    <div className="posts ">
        <div>
            <p className="title ">
                {post.title}
            </p>
        </div>
        <div>
            <p className="desc ">
                {post.description.split(" ").slice(0,10).join(" ") + "..."}
            </p>
        </div>
        <div className="imgdiv ">
            <img className="image "src={post.image} alt=""/>
        </div>
       <div className="bottom">
       <div>
            <p className="price text-green-600 ">${post.price}</p>
        </div>
        <div>
          {
             cart.some((p)=>p.id===post.id)?
             (<button className="removebtn "onClick={removefromcart}>
                Remove Item
             </button>):
             (<button className="addbtn" onClick={addtocart}>
                Add to Cart
             </button>)
          }
        </div>
       </div>
    </div>
  )
}

export default Product