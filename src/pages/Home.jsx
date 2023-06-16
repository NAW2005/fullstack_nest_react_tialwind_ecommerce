import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../api/services/products";
import axios from "axios";
import Cart from "../components/Cart";
import "animate.css/animate.css";
import Loading from "../components/Loading";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data, isLoading);

  return (
    <div className='p-5'>
      <div className=' mt-10 mb-7'>
        <h1 className='text-3xl font-bold'>Todays Best Deals For You!</h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='  flex flex-wrap gap-10  items-center'>
          {data.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
