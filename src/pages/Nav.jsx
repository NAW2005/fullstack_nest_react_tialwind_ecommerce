import React, { useState } from "react";
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className=' fixed w-full top-0  left-0  flex lg:justify-around items-center mt-5 p-5 shadow-lg '>
      <div>
        <p className='text-green-800 text-3xl font-bold'>Shopcart</p>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className='text-3xl   absolute right-8 top-5 cursor-pointer lg:hidden'
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <ul
        className={`lg:flex lg:rounded-none rounded-3xl lg:mt-0 mt-1 text-center lg:items-center lg:static lg:space-x-8 lg:space-y-0 space-y-5 lg:p-0 p-10  absolute lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 
              pl-9 lg:bg-none lg:shadow-none lg:opacity-100  transition-all duration-300 ease-in ${
                open ? "top-20 opacity-100" : "top-[-490px] opacity-0"
              }  bg-white shadow-2xl 
              }`}
      >
        <li className='text-gray-800 font-sans   text-lg hover:text-gray-600 duration-300 cursor-pointer'>
          Home
        </li>
        <li className='text-lg text-gray-800 hover:text-gray-600 cursor-pointer duration-300'>
          Deals
        </li>
        <li className='text-lg text-gray-800 hover:text-gray-600 cursor-pointer duration-300'>
          What's New
        </li>
        <li className='text-lg text-gray-800 hover:text-gray-600 cursor-pointer duration-300'>
          Delivery
        </li>
      </ul>

      <div className='hidden lg:block'>
        <input
          type='text'
          className='border py-2 px-14 rounded-full'
          placeholder='Search Product'
        />
      </div>

      <div className='flex space-x-5 ml-10 lg:ml-0'>
        <div className='flex items-center space-x-3'>
          <p className=' cursor-pointer text-3xl'>
            <BsFillPersonFill />
          </p>
          <p className='text-lg'>Account</p>
        </div>
        <div className='flex items-center space-x-3'>
          <p className=' cursor-pointer text-2xl'>
            <BsFillCartFill />
          </p>
          <p className='text-lg'>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
