import React from 'react'

const Profile = () => {

    const login = true;

  return login ? (
    <div className='flex  items-center gap-3 ' >

    <img  className='w-5 cursor-pointer' src="src/assets/Icons/notification.svg" alt="" />
    <span>Hi Amarjeet Singh</span>
    <div className='flex flex-col items-center' >
    <img className='w-10' src="src/assets/Icons/profile-pic.svg" alt="" />
    <p className=' text-sm text-blue-600 cursor-pointer' >View Profile</p>
    </div>
    


                    
    </div>
  ):(
    <div className='flex w-full gap-4'>
         
            <button className='bg-blue-800 text-white rounded-sm  py-2 text-center cursor-pointer  w-36 h-12 '>Work On Mechji</button>
    </div>
  )
}

export default Profile