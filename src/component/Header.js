import { useState ,useEffect} from "react";
import { LOGO_URL } from "../Utils/img";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

 export const Heading=()=>{
    const[btnName,setbtnName]=useState("Login");

    console.log("haanji i am renderd");
    useEffect(()=>{
        console.log("UseEffect is called");
    },[btnName]);
    
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2">
            <div >
                
          
            <img  className="w-24"
            src={LOGO_URL}/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">{(useOnlineStatus()===true)?"💚":"❤️"}</li>
                <li className="px-5"><Link to="/">Home</Link></li>
                <li className="px-5"><Link to="/about">About us</Link> </li>
                <li className="px-5"><Link to="/contact">contact</Link></li>
                <li className="px-5">Cart</li>
                <button className="login-button" onClick={()=>{
                     btnName ==="Login"?  setbtnName("LogOut"):setbtnName("Login");
                }}>{btnName}</button>
                </ul>
            </div>
        </div>
    ) 
    
}
export default Heading;