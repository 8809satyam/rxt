import { IMG_URL } from "../Utils/img";

const AccordianBody=(props)=>{
    const{acData}=props;
   
    return(
        <div>
             {
            
            acData.map(read=>(
        <div id={read.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 font-extrabold flex justify-between "> 
        
        
        {read.card.info.name}  
        <div className="font-bold "> ₹{read.card.info.price?read.card.info.price/100:read.card.info.defaultPrice/100}</div>
        <p className="font-semibold">{read.card.info.description}</p>
        <div className="w-4/12 p-4">
            <div className="absolute">
                <button className="p-1  shadow-lg mx-auto bg-gray-200 font-medium rounded-lg">Add +</button>
            </div>
        <img src={IMG_URL+read.card.info.imageId} className="w-full"/>
        </div>
        </div>
        
       
            ))
        }
        </div>
    )
}
export default AccordianBody;