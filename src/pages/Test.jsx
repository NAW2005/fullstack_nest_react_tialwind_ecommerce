import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetProductsQuery } from "../api/services/products";

const Test = () => {
  const { data, isLoading } = useGetProductsQuery();
  const imgs = [
    "https://uploads-ssl.webflow.com/63e857eaeaf8533471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
    "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
  ];

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className='flex items-center flex-wrap justify-center'>
            {imgs.map((img, index) => (
              <div key={index}>
                <img className='w-[200px] h-[500px]' src={img} alt='' />
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
