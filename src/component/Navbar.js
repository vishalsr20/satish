import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

const Navbar = (props) =>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;



    return (
        <div className=" flex  justify-between  mt-2 w-11/12 items-centre max-w-[1160px] py-4 mx-auto ">
              <Link to="/">
                <img src={logo} width={160} height={32} loading="lazy" />
              </Link>
              <nav>
                <ul className=" flex gap-x-6  justify-center items-center text-richblack-100">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/about">About</Link> */}
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
              </nav>

              {/* Login - Signup - Logout - Dashboard */}
              <div className=" flex items-center gap-x-4 ">
             { !isLoggedIn &&
                   <Link to="/login">
                   <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-800 " >
                       Login
                   </button>
               
               </Link>
             }

                { !isLoggedIn &&
                   <Link to="/signup">
                   <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-800 ">
                       Signup
                   </button>
               
               </Link>
             }

                { isLoggedIn &&
                   <Link to="/dashboard">
                   <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-800 ">
                       Dashboard
                   </button>
               
               </Link>
             }

                { isLoggedIn &&
                   <Link to="/">
                   <button onClick={ () =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                    
                   } } 
                   className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-800 ">
                       Logout
                   </button>
               
               </Link>
             }
              </div>

        </div>
    )
}
export default Navbar 