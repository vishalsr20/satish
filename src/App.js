import "./App.css";
import Navbar from "./component/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import About from "./component/AboutPage";
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoutes from "./component/PrivateRoute";
function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div className="h-screen w-screen bg-richblack-900  flex flex-col  ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        {/* <Route path="/about" element={<About setIsLoggedIn={setIsLoggedIn}/>}/> */}
        <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
        <PrivateRoutes isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoutes>
        }/>
      </Routes>

    </div>
  )
}

export default App;
