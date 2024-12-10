import React from "react";
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
    <Swiper
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Pagination]}
      className="mySwipe rounded-lg my-10  mx-auto w-[93%] 2xl:w-[75%] 2xl:h-[380px] h-[200px]  xl:h-[300px]"
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide className="relative w-full h-full">
        <Image
          src={"/images/homePage/swiper/Market.jpg"}
          alt="market "
          unoptimized
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/homePage/swiper/Food.jpg"}
          alt="food "
          unoptimized
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/homePage/swiper/Driver.jpg"}
          alt="driver "
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
          unoptimized
        ></Image>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
