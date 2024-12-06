import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function SwiperComponent() {
  return (
    <div className="my-10 bg-white mx-auto w-[93%] 2xl:w-[75%]">
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        className="mySwipe rounded-lg  "
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src={"/images/homePage/swiper/Market.jpg"}
            alt="market "
            width={2000}
            height={2000}
            unoptimized
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/homePage/swiper/Food.png"}
            alt="market "
            width={2000}
            height={2000}
            unoptimized
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/homePage/swiper/Driver.png"}
            alt="market "
            width={2000}
            height={2000}
            unoptimized
          ></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
