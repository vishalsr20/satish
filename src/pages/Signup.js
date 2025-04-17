import React from "react";
import Template from "../component/Template";
import signupImg from "../assets/signup.png"
 const Signup = ({setIsLoggedIn}) =>{
    return (
      <Template
      title="Join the million learnig to code with StudyNotion for free"
      desc1="bulid skils for today, tomorrow and beyond"
      desc2="Education to future proof to your carrer"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
     
      />
    )
 }
 export default Signup