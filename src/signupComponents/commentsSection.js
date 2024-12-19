import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "swiper/css";

function CommentSection() {
  const data = [
    {
      id: 1,
      name: "محمد عزیزی",
      comment:
        "بنده از کودکی دچار نوعی معلولیت بودم و چون خجالت می‌کشیدم که مشکلم رو‌ با بقیه به‌ صورت حضوری بیان کنم، تا به امروز نمی تونستم به صورت حظوری ثبت‌نام کنم. با ثبت‌نام آنلاین خیلی راحت کارها رو انجام و الان عضوی از خانواده اسنپم.",
      src: "/images/digitalSignupPage/avatar2.webp",
    },
    {
      id: 2,
      name: "داوود افتخاری",
      comment:
        "من اینستاگرام باشگاه رانندگان اسنپ رو دنبال می‌کردم و تخفیف‌ها و طرح‌هایی که می ذاشتن همیشه برام جذاب بود، ولی بخاطر دور بودن خونه‌مون فرصت نمی شد ثبت‌نام کنم. با این ثبت‌نام آنلاین خیلی سریع کارام رو انجام دادم و الان تو اسنپم.",
      src: "/images/digitalSignupPage/avatar3.webp",
    },
    {
      id: 3,
      name: "احسان عزیزی",
      comment:
        "وقتی فهمیدم اسنپ به راننده‌هاش لاستیک با قیمت دولتی میده، راغب شدم که ثبت‌نام کنم ولی اصلا فرصت نمی‌کردم و همیشه یادم می‌رفت. الان با ثبت‌نام آنلاین خیلی راحت و سریع مدارکمو ارسال کردمو کارامو انجام دادم و بلاخره اسنپی شدم.",
      src: "/images/digitalSignupPage/avatar4.webp",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="px-5 mt-5 pb-14 pt-10 bg-red-40 xl:w-[80%] lg:mx-auto">
      <div className="bg-yellow-40 my-4">
        <p className="text-center text-2xl fontBold">
          کاربران درباره اسنپ رانندگان چه گفته‌اند؟
        </p>
      </div>

      <div className="bg-blue-10  mt-10 ">
        <Swiper
          ref={swiperRef}
          // slidesPerView={3}
          loop={true}
          breakpoints={{
            992: {
              slidesPerView: 3, // 3 slides per view on screens >= 992px
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2, // 2 slides per view on screens >= 640px
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1, // 1 slide per view on screens < 640px
              spaceBetween: 20,
            },
          }}
          className=" bg-red-20 mySwiper "
        >
          
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col mx-1  p-5 border border-gray-400 rounded-3xl md:h-[340px] h-[260px] ">
                  <div className="flex items-center justify-start gap-5 mb-4">
                    <div className="bg-white p-[4px] rounded-full shadow">
                      <Image
                        unoptimized
                        src={item.src}
                        alt={item.name}
                        width={55}
                        height={50}
                        className="rounded-full lg:w-[70px]" //
                      />
                    </div>
                    <p className="font-bold mt-2 text-gray-500 lg:text-xl">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-gray-900 mt-2 text-md md:text-lg lg:text-lg">
                    {item.comment}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        
        </Swiper>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()} // Navigate to the previous slide
            className=" bg-blue-100 text-blue-800  rounded-full ml-2 p-2  hover:bg-blue-200"
          >
            <BiRightArrowAlt size={30} />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()} // Navigate to the next slide
            className=" bg-blue-100 text-blue-800 rounded-full  p-2 hover:bg-blue-200"
          >
            <BiLeftArrowAlt size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
