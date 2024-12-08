
import React, { useContext, useState } from "react";
import "./Oauth.css"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from '../../config/firebase'
import { AppContext } from "../../Context/AppContext";

const Oauth = () => {

    const {url,SetShowLogin,showLogin,data,setData} = useContext(AppContext);
    
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            const res = await fetch(url+'/api/user/google',{
                method:"POST",
                headers:{
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({name: result.user.displayName, email: result.user.email ,photo:result.user.photoURL})
                
            })
            const data = await res.json();
            
            setData({
                name:data.name,
                email:data.email,
                avatar:data.avatar
            })

            
            SetShowLogin(false)
        } catch (error) {
            console.log("could not sign in with google",error);
            
        }
    }

  return (
    <button onClick={handleGoogleClick} type='button'  className='font-bold text-lg'>Continue With Google</button>
  )
}

export default Oauth