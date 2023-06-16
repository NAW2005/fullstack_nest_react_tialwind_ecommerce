import React, { useEffect, useState } from "react";
import { useGetDetailProductQuery } from "../api/services/products";
import { useLocation, useParams } from "react-router-dom";
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineInbox,
} from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import Button from "./Button";

const Productdetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetDetailProductQuery(id);
  const [plus, setPlus] = useState(1);

  const plusItem = () => {
    setPlus((pre) => pre + 1);
  };

  const minusItmes = () => {
    if (plus === 1) {
      return plus;
    } else {
      setPlus((pre) => pre - 1);
    }
  };

  const imgs = [
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
  ];

  return (
    <div className='lg:flex  lg:justify-center lg:gap-10 bg-green- p-5 mt-14 '>
      <div className='lg:w-[45%] w-full   space-y-5   '>
        <div className='bg-gray-100 h-[500px] rounded-xl flex  justify-center'>
          <img
            className=''
            src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png'
            alt=''
          />
        </div>
        <div className='flex gap-5 items-center flex-wrap justify-center'>
          {imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              className='h-[140px] rounded-lg bg-gray-100 mb-3'
              alt=''
            />
          ))}
        </div>
      </div>

      <div className='lg:w-[45%]  lg:mt-0   mt-5 w-full  space-y-10'>
        <div className='space-y-3'>
          <h1 className='font-bold text-3xl'>{data?.name}</h1>
          <p className='text-gray-600'>{data?.description}</p>
          <div className='flex space-x-1 items-center'>
            <p className='flex text-xl'>
              <AiFillStar className='text-green-600' />
              <AiFillStar className='text-green-600' />
              <AiFillStar className='text-green-600' />
              <AiFillStar className='text-green-600' />
              <AiFillStar className='text-green-600' />
            </p>
            <p className='text-gray-600'> {data?.inventory}</p>
          </div>
          <div className='border border-gray-50 w-full'></div>
        </div>
        <div className=''>
          <h1 className='font-bold text-3xl'>$549.00 or 99.99/month</h1>
          <p className='text-sm text-gray-600'>
            Suggested payments with 6 months special finacing
          </p>
          <div className='border border-gray-50 w-full mt-5'></div>
        </div>
        <div className='space-y-5'>
          <div className='flex items-center space-x-8'>
            <div className='  py-4  rounded-full flex items-center w-[150px] bg-gray-200 justify-evenly '>
              <button onClick={minusItmes} className='text-lg  cursor-pointer'>
                <AiOutlineMinus />
              </button>
              <p className='text-sm cursor-pointer text-green-800 font-semibold'>
                {plus}
              </p>
              <button onClick={plusItem} className='text-lg cursor-pointer'>
                <AiOutlinePlus />
              </button>
            </div>
            <div className='text-xs text-gray-600 '>
              <p className=''>
                Only <span className='text-orange-600'>12 Items </span>Left!
              </p>
              <p>Don't misst it</p>
            </div>
          </div>
          <div className='flex items-center space-x-3'>
            <Button
              name='Buy Now'
              className='py-[0.5rem]  rounded-full text-sm text-white font-bold px-10 hover:bg-green-900 duration-300 bg-green-800'
            />
            <Button
              name='Add to Cart'
              className='rounded-full text-sm border-green-800 border-2 py-[0.5rem] px-10 text-green-800 font-bold hover:bg-green-800 hover:text-white duration-300'
            />
          </div>
          <div className='border border-gray-50 w-full'></div>
        </div>
        <div className='space-y-5'>
          <div className='flex  space-x-5'>
            <div>
              <CiDeliveryTruck className='text-2xl text-orange-600' />
            </div>
            <div className=''>
              <h1 className='font-semibold  text-gray-800'>Free Delivery</h1>
              <p className='text-gray-600 text-sm'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className='flex  space-x-5 '>
            <div>
              <AiOutlineInbox className='text-xl text-orange-600' />
            </div>
            <div className=''>
              <h1 className='font-semibold  text-gray-800'>Return Delivery</h1>
              <p className='text-gray-600 text-sm'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
