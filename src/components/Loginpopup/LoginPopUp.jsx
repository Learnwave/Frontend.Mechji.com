import React, { useContext, useState } from "react";
import "./Loginpopup.css";
import axios from 'axios';
import { AppContext } from "../../Context/AppContext";

const LoginPopUp = ({ SetShowLogin }) => {

  const {url,token,setToken} = useContext(AppContext);
  
  const [currState, SetCurrState] = useState("Sign Up");

  const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        repeat_password:""
        });
   const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({
          ...data,[name]:value
        }))
        }
  const onLogin = async (event)=>{
        event.preventDefault();
        let newUrl = url ;
        if (currState === "Login") {
          newUrl += "/api/user/login"
        }else{
          newUrl += "/api/user/register"
        }
        const responce = await axios.post(newUrl,data);
        if (responce.data.success) {
            setToken(responce.data.token);
            localStorage.setItem("token",responce.data.token);
            SetShowLogin(false);
            
        }else{
          alert(responce.data.message)
        }
  }

console

  return (
    <div className="login-popup  fixed z-10 w-full h-full  ">
      <form onSubmit={onLogin} className="Login-popup-container">
        <div className="login-popup-title">
          <h2 className=" text-2xl">{currState}</h2>
          <img
            onClick={() => {
              SetShowLogin(false);
            }}
            src="src/assets/Icons/xmark-solid.svg"
            className="w-5 cursor-pointer"
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Enter Your Name" required />
          )}

          <input name="email" onChange={onChangeHandler} value={data.email} type="email"  placeholder="Enter Your Email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter Password" required />
          {currState === "Login" ? (
            <></>
          ) : (
         
            <input name="repeat_password" onChange={onChangeHandler} value={data.repeat_password} type="password" placeholder="Re-Enter Password" required />
            
          )}
        </div>
        <button type="submit" className="font-bold text-lg">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
            {currState === "Login" ? <p>Create a new account ? <span className=" cursor-pointer" onClick={()=> {SetCurrState("Sign Up")} }> click here</span> </p> 
            :  <p>Already have an account ? <span className=" cursor-pointer" onClick={()=> {SetCurrState("Login")} }>click here</span></p>
             }
             
            
      </form>
    </div>
  );
};

export default LoginPopUp;
