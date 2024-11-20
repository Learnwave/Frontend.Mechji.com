import React from 'react'
import ShopCard from '../Shopcard/ShopCard'

const MobileShopCard = () => {
  return (
    <div className=''>
       
        <div className='flex gap-2 items-center justify-around overflow-auto'>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        
      </div>
    </div>
  )
}

export default MobileShopCard