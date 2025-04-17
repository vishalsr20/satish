import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate();
    const [formData , setFormData] = useState( {
        firstname:"", lastname:"" ,email:"", password:"", confirmpassword:""
    })
    const [accountType , setAccountType] = useState("student")
    function changeHandler(event){
        setFormData( (prevData)=> (
            {
                ...prevData , 
                [event.target.name]:event.target.value
        })

        )

    }

    function submitHandler(event) {
        event.preventDefault()
       if(formData.password !== formData.confirmpassword){
        toast.error("Password do no match")
        return ;
       }
       setIsLoggedIn(true);
       toast.success("Account is created");
       const accountData ={
        ...formData
       }
       console.log(accountData)
       navigate ("/dashboard")
    }

    const [showPassword, setShowPassword] =useState(false)
    return (
        <div>
            {/* Student instructor tab */}
            <div className="flex  bg-richblack-800 gap-x-1  my-6 rounded-full p-1 max-w-max">
                <button
                className={`${accountType === "student" ? 
                "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 
            px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccountType("student")} >Student </button>
                <button
                  className={`${accountType === "instructor" ? 
                  "bg-richblack-900 bg-roun text-richblack-5"
                 : "bg-transparent text-richblack-200 "}
                  py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* Firstname and last name */}
                <div className="flex gap-4 mt-4 justify-between">
                <label >
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">First Name <sup className="text-pink-200">* </sup> </p>
                <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter Your first Name"
                value={formData.firstname}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>
             </label>

             <label>
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">Last Name <sup className="text-pink-200">* </sup> </p>
                <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Your last  Name"
                value={formData.lastname}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>
             </label>

             
            </div>
            {/* email Address */}
            <label>
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">E-mail <sup className="text-pink-200">* </sup> </p>
                <input
                required
                type="text"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Your Name"
                value={formData.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>
             </label>
             {/* create password and confirm password */}
             <div className="flex gap-4 mt-4 justify-between">
             <label className=" w-full relative">
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">Create Password <sup className="text-pink-200"> * </sup> </p>
                <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Your Password"
                value={formData.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>

                <span 
                 className="absolute right-3 top-[38px] cursor-pointer "
                onClick={()=> setShowPassword ( (prev) => !prev)}>
                    {showPassword ? (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>)}
                </span>
             </label>

             <label className="w-full relative ">
                <p className=" text-richblack-5 text-[0.875rem] leading-[1.375rem] mb-1">Confirm Password <sup className="text-pink-200">* </sup> </p>
                <input
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder=" confirm  Password"
                value={formData.confirmpassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  w-full p-[12px]"/>

                <span
                 className="absolute right-3 top-[38px] "
                onClick={()=> setShowConfirmPassword ( (prev) => !prev)}>
                    {showConfirmPassword ? (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>)}
                </span>
             </label> 

             </div>
             <button  className="bg-yellow-50 mt-6 rounded-[80px] text-black w-full  font-medium px-[12px] py-[8px] ">Create Account</button>
           

            </form>

        </div>
    )
}
export default SignupForm