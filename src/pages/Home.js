import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';
const Home = () => {
    const API_URL="https://fakestoreapi.com/products";
     const[loading,setloading]=useState(false);
     const[posts,setposts]=useState([]);
    async function fetchproductdata(){
         setloading(true);
         try{
            const res= await fetch(API_URL);
            const data=await res.json();
            setposts(data);
         }
         catch(error){
            console.log("ERROR");
            setposts([]);
         }
         setloading(false);
    }

    useEffect(()=>{
        fetchproductdata();
    },[])
  return (
    <div>
      {
         loading?(<Spinner/>):(
            posts.length>0?(
                <div className="postdiv grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl 
                p-2  mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                  {

                  posts.map((post)=>(
                 <Product key={post.id} post={post}/>
                      ))

                  }
                  </div> 
                  
            ):(
                <div className="nodata">
                    <p>No Data Found</p>
                </div>
            )
         )
      }
    </div>
  )
}

export default Home