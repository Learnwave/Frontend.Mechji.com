import React, { useContext, useState } from 'react'
import Profile from '../Profile/Profile'
import { Link ,NavLink} from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'


const Navbar = ({SetShowLogin}) => {
  
    const {token,setToken} = useContext(AppContext);

    let [show,setShow] = useState("hidden")

    const showFun = () =>{
            setShow("flex")
    }
    
  return (
    
    <div className='sm:hidden' >

  
         {/* company logo */}
        <div className='flex justify-between items-center mt-2' >
        <NavLink to="/">
        <div className=''>
            <h1 className='text-3xl md:text-5xl' >Mechji</h1>
            <span className='text-sm'>Your Local Store</span>
        </div>
        </NavLink>
        

        {/* small screen icons */}
       <div onClick={()=>setbtn()} className='flex flex-col items-center justify-center sm:hidden' >
       
        <img src="src/assets/Icons/location.svg" className='w-3' alt="" />
        <span className='text-sm text-gray-500 ' >Location</span>
       </div>
         {/* cart */}
        <div className=''>
                 <img className='w-7 cursor-pointer ' src="src/assets/Icons/cart-shopping-solid.svg" alt="" />
        </div>

        {/* notification */}
        <div className=''>
                <img  className='w-6 cursor-pointer' src="src/assets/Icons/notification.svg" alt="" />
        </div>

        {/* hamburger */}
        <div className=''>
            <img className='w-8 cursor-pointer ' src="src/assets/Icons/burger-menu.svg" alt="" />
        </div>
        {/* user icon */}
        <div className='hidden '>
             <img className='w-8 cursor-pointer ' src="src/assets/Icons/user-solid.svg" alt="" />
        </div>
        {/* location and serch box for sm */}
        </div >
             <div className={`flex gap-2 flex-col sm:hidden`}>

                <div className='  w-full h-9  border-solid border-black border-2 rounded-md p-2 flex justify-between items-center  '>
                     <img className='w-3 text-gray-600' src="src/assets/Icons/location.svg" alt="" />
                     <input className='w-3/4 flex-grow ml-2 bg-transparent outline-none border-none'  type="text" placeholder='Type Your Location ' name="" id="" />

                   
                       
                       <img className='w-5 text-gray-600' src="src/assets/Icons/magnifying-glass-solid.svg" alt="" />

                 
                    
                   </div>
                <div className=' w-full h-9  border-solid border-black border-2 rounded-md p-2 flex justify-between items-center '>
                    <input className='w-3/4 bg-transparent outline-none border-none'  type="text" placeholder=' Find Everything Near At You ' name="" id="" />
                   
                       <img className='w-5 text-gray-600' src="src/assets/Icons/magnifying-glass-solid.svg" alt="" />
                    
                 </div>

                </div>
                 <div className={` ${show} absolute top-0 left-0 w-full  h-64  bg-slate-300 sm:hidden `}>
                    <div className=''>
                        <img onClick={()=>{setShow}}  className=' w-5 cursor-pointer relative top-3 left-3 ' src="src/assets/Icons/xmark-solid.svg" alt="" />
                 </div>
            </div>
           
    </div>
  )
}

export default Navbar