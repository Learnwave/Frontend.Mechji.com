import React from 'react'
import ShopCard from '../Shopcard/ShopCard'

const GroceryShopCard = () => {
  return (
    <div>
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

export default GroceryShopCard