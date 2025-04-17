import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) =>{

    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        email:"" , password:""
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData(  (prevData) => (
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
         setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
         
    }
   
    return(
       <form onSubmit={submitHandler} 
       className="flex flex-col w-full gap-y-4 mt-6 ">
            <label className="w-full ">
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="text"
               
                 value={formData.email}
                 name="email"
                onChange={changeHandler}
                placeholder="Enter e-mail id"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>
            </label>

            <label className="w-full relative">
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type={showPassword ? ("text" )  : ("password")}
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter your password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"
                />
                <span onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] ">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                    (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>

                <Link to="#">
                    <p className="text-xs text-blue-100 mt-1 ml-auto max-w-max">Forget Password</p> </Link>
            </label>
            <button className="bg-yellow-50 mt-6 rounded-[80px] text-black font-medium px-[12px] py-[8px] ">
                Sign in
            </button>


       </form>
    )
}
export default LoginForm