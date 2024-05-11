import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Contact from "./component/Contact";
import { Error } from "./component/Error";
import { RestaurantMenu } from "./component/RestaurantMenu";



 
/*
app component
header ->> logo ,search
body --> menu , mw=enu card;
footer 
  --- copyright
  --- links
  --- Adress 
  devlop a web application useing react Js that includes an intractive  map of college campus.
  Users can explore diffrent locations and building by zooming in and out and clicking on specific
  points of intrest will dispaly additional information Ensure the application in responsive and adapts
  to various screen size.
  --- Contact
*/


const About=lazy(()=>import("./component/About"));



const AppLayout=() =>{
    return (
    <div>
        <Heading/>
        <Outlet/>
   
   
    </div>
     );
};
// Creating a configration for app Route
const appRouter=createBrowserRouter([
  {
    path: "/",
    element :<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About></About></Suspense>
        
    
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/> 
  }
  
]);
 const root=ReactDOM.createRoot(document.getElementById("hii"));
 root.render(<RouterProvider router={appRouter}/>);



 
// let head=React.createElement("h1",{id:"jii"},"hello world From React");
//         let root=ReactDOM.createRoot(document.getElementById("hii"));
//         root.render(head);-