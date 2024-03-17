import React, { useState } from 'react'
import "./App.css";
import {FaStar} from "react-icons/fa"

function Starrating({noofstarts=5}) {

  const[rating,setRating]=useState(0);
  const[hover,setHover]=useState(0);


  function handleclick(givenindex){
    setRating(givenindex);
  }
  function handlemouseclick(givenindex){
    setHover(givenindex);
  }
  function handlemouseleave(){
   setHover(rating)
  }
  return (
   
  

    <div className="start">

       {[...Array(noofstarts)].map((_,index) => {
        index++;

         return  (

          <FaStar
          key ={index}
          className={index <= (hover || rating) ? 'active':'hidden' }
          onClick= { ()=>handleclick(index) }
          onMouseMove={()=>handlemouseclick(index)}
          onMouseLeave={()=>handlemouseleave()}
          size={80}
          />
          );
        

       })}

    </div>
  );
}

export default Starrating;
