import React from 'react'
import { useState } from 'react'
import { FaSearch, FaCartPlus, FaHeart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <div className='flex p-3 bg-gradient-to-r from-yellow-300 to-red-600'>
        {/* Logo */}
        <div className='logo w-2/12 flex items-center'>
            <h2 className='inline-block ml-4 font-sans text-2xl font-bold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent'>React-Ecom-Site</h2>
        </div>

        {/* Nav Links */}
        <div className='nav-links  w-6/12'>
            <ul className=' gap-8 flex flex-row justify-center items-center'>
                <li className='font-sans text-lg font-semibold text-gray-700 hover:text-gray-900 cursor-pointer'><Link to="/">Home</Link></li>
                <li className='font-sans text-lg font-semibold text-gray-700 hover:text-gray-900 cursor-pointer'><Link to="/products">Products</Link></li>
                <li className='font-sans text-lg font-semibold text-gray-700 hover:text-gray-900 cursor-pointer'><Link to="/catalog">Catalog</Link></li>
            </ul>
        </div>

        {/* Icon Buttons */}

          {/* Search Bar */}

         <div className='flex justify-center items-center w-4/12 max-w-md'>
             <div className={`search-icon flex items-center pl-3 transition-all duration-300 overflow-hidden ${open ? 'w-52 px-2' : 'w-10'}`}>
                <button onClick={() => setOpen(!open)} className='w-10 flex-shrink-0 flex justify-center items-center'>
                    <FaSearch className='text-gray-700 hover:text-gray-900 cursor-pointer' />
                </button>
                <input type="text" placeholder='Search...' className='w-full h-7 bg-white rounded-full outline-none px-2' />
             </div>
              <div className='cart-icon w-10 flex items-center pr-3'>
                <button className='w-10 h-10 flex-shrink-0 flex justify-center items-center'>
                    <FaCartPlus className='text-white hover:text-blue-500 cursor-pointer' />
                </button>
             </div>
              <div className='cart-icon w-10 flex items-center pr-3'>
                <button className='w-10 h-10 flex-shrink-0 flex justify-center items-center'>
                    <FaHeart className='text-white hover:text-red-700 cursor-pointer' />
                </button>
             </div>
              <div className='cart-icon w-10 flex items-center pr-3'>
                <button className='w-10 flex-shrink-0 flex justify-center items-center'>
                    <FaUser className='text-white hover:text-black cursor-pointer' />
                </button>
             </div>
          </div>

          

               
      </div>
    </>
  )
}

export default Navbar