import React from 'react'

const ShopCard = () => {
  return (
    <div className='mt-3 '>
        
        <div className=' flex flex-col border-1 p-2 rounded w-48'>
           
            <div className='flex  items-center justify-between'>
                <div className='flex gap-2'>
                    <img src="src/assets/Icons/verified-icon.svg" className='w-4' alt="" />
                    <span className='text-xs '>Verified</span>
                </div>
                <div className='flex gap-2'>
                     <img src="src/assets/Icons/star-icon.svg" className='w-4' alt="" />
                    <span className='text-xs'>4.5(1.5k)</span>
                </div>
            </div>
            <div className='flex gap-5 flex-col'>
                <img src="src/assets/Icons/shopimg.svg" className='w-50' alt="" />
            </div>

            <div className='flex flex-col items-center justify-between gap-1'>
                <a href="" className='text-2xl' >Amar-Telecom</a>
                <p className='flex items-center text-xs gap-3'><img src="src/assets/Icons/location.svg" className='w-2' alt="" /> Kataru Chak,Pathankot-Punjab</p>
                <p className='text-xs'>Work Radius : 25 km</p>
                <p className='text-xs'>Timing : 9am To 10pm | Open Now </p>
                <button className=' w-full border-1 px-4 py-1 rounded hover:bg-slate-300' >Visit on Shop</button>

            </div>

        </div>
    </div>
  )
}

export default ShopCard