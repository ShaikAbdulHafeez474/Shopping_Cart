import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartslice';
import { toast } from 'react-toastify';
const Cartitem = ({item,itemindex}) => {
   const dispatch=useDispatch();
    const removefromcart=()=>{
       dispatch(remove(item.id));
       toast.success("Item removed");
    }
  return (
    <div className="cartlist">
        <div className="cartitem">

            <div>
                <img src={item.image}/>
            </div>

            <div className="cartdesc">
                <h1 className="carttitle">{item.title}</h1>

                <h1 className="desc1">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>

                <div className="cartprice">
                    <p >${item.price}</p>
                    <div onClick={removefromcart}>
                        <FcDeleteDatabase className="delbtn"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="line"></div>
    </div>
  )
}

export default Cartitem