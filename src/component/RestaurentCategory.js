import { useState } from "react";
import AccordianBody from "./AccordianBody";

const RestaurantCategory=(props)=>{
    const[accor,setAccor]=useState(false);
    const{data}=props;
    const{title,itemCards}=data;
    console.log(data);
    const handleClick=()=>{
     accor===false?setAccor(true):setAccor(false);
    }
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
        <span className="font-bold">{title}({itemCards.length})</span>

        {
            accor===true? <AccordianBody acData={itemCards}/>:null
        }
       
        <span>⬇️</span>
       
        
        </div>
       </div>
        </div>
    )
}
export default RestaurantCategory;