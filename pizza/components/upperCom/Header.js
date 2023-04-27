import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";



const Header = () => {
  return (
    <div className="relative w-full flex md:h-[82vh] h-[72vh]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="absolute w-full h-full flex"
      >
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%] object-cover"
            fill
            src="/headerImg/inna-gurina-JspLKUauwSI-unsplash.jpg"
            alt="headerImg1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%] object-cover"
            fill
            src="/headerImg/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg"
            alt="headerImg1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%] object-cover"
            fill
            src="/headerImg/vit-ch-Oxb84ENcFfU-unsplash.jpg"
            alt="headerImg1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%] object-cover"
            fill
            src="/headerImg/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg"
            alt="headerImg1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-[100%] h-[100%] object-cover"
            fill
            src="/headerImg/ivan-torres-MQUqbmszGGM-unsplash.jpg"
            alt="headerImg1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
