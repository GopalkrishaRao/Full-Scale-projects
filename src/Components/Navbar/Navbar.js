import React from 'react'
import Cart from './Cart and Profile/Cart'
import Searchbox from './Searchbox'

export default function Navbar() {
  return (
    <div className='sticky top-0 	z-index: 1;
    z-10'>
    <div className="navbar bg-base-100 flex items-center justify-between bg-blue text-white  ">
      
      <div>
      <div className="flex-1 ">
        <div className='flex flex-row justify-center items-center'>
         <img src={require('../images/logo.png')} alt='logo' className='h-6 w-24 md:h-12 md:w-48'/>
          {/* <a className="btn btn-ghost normal-case text-xl">
           E-cart
          </a> */}
        </div>
      
      </div>
      </div>
     <Searchbox/>
     <Cart/>
    </div>
    </div>
  )
}
