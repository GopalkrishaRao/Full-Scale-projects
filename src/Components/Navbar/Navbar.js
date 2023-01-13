import React from 'react'
import Cart from './Cart'
import Searchbox from './Searchbox'

export default function Navbar() {
  return (
    <div>
    <div className="navbar bg-base-100 flex items-center justify-between bg-blue text-white ">
      <div>
      <div className="flex-1 ">
        <div className='flex flex-row justify-center items-center'>
         <img src='../images/logo.png' alt='logo'/>
          <a className="btn btn-ghost normal-case text-xl">
           E-cart
          </a>
        </div>
      </div>
      </div>
     <Searchbox/>
     <Cart/>
    </div>
    </div>
  )
}
