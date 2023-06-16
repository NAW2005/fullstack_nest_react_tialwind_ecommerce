import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className=''>
      <Link to={`/productdetail/${props.item.id}`}>
        <div className=' duration-200 bg-gray-50 border w-[420px] flex justify-center h-[320px] rounded-md'>
          <img
            className=''
            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png'
            alt=''
          />
        </div>
      </Link>
      <div className='space-y-3 mt-2'>
        <div className='flex text-lg font-bold items-center justify-between'>
          <p className='text-lg font-semibold text-gray-900'>
            {props.item.name}
          </p>
          <p className='text-gray-700 flex '>
            <p className='text-sm'>$</p>
            <p className='text-lg'>{props.item.price}</p>
            <p className='text-sm'>.00</p>
          </p>
        </div>
        <p className='text-gray-800'>{props.item.description}</p>
        <div className='flex justify-between items-center'>
          <Button
            name='Add to Cart'
            className='py-3  px-8 hover:border-green-800 rounded-full border-2 border-black font-semibold hover:bg-green-800 cursor-pointer duration-700 hover:text-white'
          />
          <div className='text-2xl cursor-pointer'>
            <AiOutlineStar />
          </div>
        </div>
      </div>
      <div className='border  border-black w-full mt-6'></div>
    </div>
  );
};

export default Cart;
