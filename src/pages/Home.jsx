import React from 'react'
import CategoryMenus from '../components/CategoryMenu/CategoryMenus'

import MobileShopCard from '../components/Mobileshopcard/MobileShopCard'

const Home = () => {
  return (
    <div>
      <div>
          <CategoryMenus/>
          <div className='mt-3'>
            <h3>Mobiles Businesses in malikpur</h3>
           </div>
          <MobileShopCard/>
          <div className='mt-3'>
            <h3>Groceries Businesses in malikpur</h3>
           </div>
           <MobileShopCard/>

      </div>
      
    </div>
  )
}

export default Home