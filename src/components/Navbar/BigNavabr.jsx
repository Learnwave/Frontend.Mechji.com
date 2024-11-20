import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const BigNavabr = ({SetShowLogin}) => {
  
  const {token,setToken} = useContext(AppContext);


  return (
    <div className="hidden sm:block">
      <div className="flex  gap-3 items-center justify-between">
        <Link to="/">
          <div className="flex  cursor-pointer flex-col basis-0">
            <h1 className="text-4xl lg:text-5xl ">Mechji</h1>
            <span className="text-xs lg:text-base ">Your Local Store </span>
          </div>
        </Link>

        <div className={`flex gap-3`}>
          <div className="  w-full h-7  border-1 rounded-md p-2 flex justify-between items-center  ">
            <img
              className="w-2 text-gray-600"
              src="src/assets/Icons/location.svg"
              alt=""
            />
            <input
              className="w-3/4 flex-grow ml-2 bg-transparent outline-none border-none"
              type="text"
              placeholder="Type Your Location "
              name=""
              id=""
            />
            <img
              className="w-3 text-gray-600 cursor-pointer    "
              src="src/assets/Icons/magnifying-glass-solid.svg"
              alt=""
            />
          </div>

          <div className=" w-full h-7  border-1 rounded-md p-2 flex justify-between items-center ">
            <input
              className="w-3/4 bg-transparent outline-none border-none"
              type="text"
              placeholder=" Find Everything Near At You "
              name=""
              id=""
            />
            <img
              className="w-3 text-gray-600 cursor-pointer "
              src="src/assets/Icons/magnifying-glass-solid.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-4">
         
          <img
            className="w-7 cursor-pointer "
            src="src/assets/Icons/cart-shopping-solid.svg"
            alt=""
          />
          <img
            className="w-6 cursor-pointer"
            src="src/assets/Icons/notification.svg"
            alt=""
          />
          <img
            className="w-8 cursor-pointer md:hidden "
            src="src/assets/Icons/burger-menu.svg"
            alt=""
          />
            {!token ? <button onClick={()=>SetShowLogin(true)} className=" hidden md:block border-1 py-1 px-2 hover:bg-slate-300 rounded-md ">
            Login/Signup
             </button> : <div className="navbar-profile">
              <img className=" w-10" src="./src/assets/Icons/profile-pic.svg" alt="" />
              
            </div>}
          

        </div>
      </div>
    </div>
  );
};

export default BigNavabr;
