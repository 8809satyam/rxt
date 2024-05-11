import { useState } from "react";
import UserClass from "./Userclass";
import React from "react";

class About extends React.Component{
    constructor(props){
       super(props); 
       this.state={
        userInfo: [

           

        ]
        
       }
    }
   async componentDidMount(){
       // console.log("parent componenetDidMount");
       const data=await fetch("https://dummyjson.com/users");
       const json= await data.json();
       console.log(json);
       this.setState({
       
        userInfo:json.users[0]
       });
      
    }
    render(){
        const {firstName,lastName,email,age,gender,id,image}=this.state.userInfo;
        console.log("parent render");
        return(
                   <div className="user-card">
        <h2>Name: {firstName} {lastName}</h2>
         <h2>Email :{email}</h2>
        <h2>Age: {age}</h2>
        <h4> Gender :{gender}</h4>
        <img src={image}/> 
       {/* // <UserClass key={id}  empData={users[1]}/> */}
       

       </div>
        )
    }
}
export default About;

// const About=()=>{
//     const[count]=useState(0);
//     const[count2]=useState(2);
//     return (
//        <div className="user-card">
//         <h2>Name: Satyam Singh</h2>
//         <h2>Count= {count}</h2>
//         <h2>Count= {count2}</h2>
//         <h2>Location: Dehradun</h2>
//         <h4>contact : 7355572749</h4>
//         <UserClass name={"haanji kaise ho saree"} location={"Lucknow"}/>
//        </div>
       
//     )
// }
// export default About;