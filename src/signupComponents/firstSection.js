import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function FirstSection() {
  const [states, setStates] = useState({
    isFocused: false,
    inputValue: "",
    error: "",
    selectedVehicleId: 1,
  });
  console.log(states);

  const handleFocus = () => {
    setStates((prev) => ({ ...prev, isFocused: true, error: "" }));
  };

  const handleBlur = () => {
    setStates((prev) => ({ ...prev, isFocused: false }));
    validateInput(states.inputValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setStates((prev) => ({ ...prev, inputValue: value }));
      validateInput(value);
    }
  };

  const validateInput = (value) => {
    if (value.length !== 11 || !value.startsWith("09")) {
      setStates((prev) => ({
        ...prev,
        error: "شماره موبایل معتبر نمیباشد!",
      }));
    } else {
      setStates((prev) => ({ ...prev, error: "" }));
    }
  };

  const handleLabelClick = () => {
    handleFocus();
    document.getElementById("mobile-number").focus();
  };

  const registerData = [
    {
      id: 1,
      src: "/images/digitalSignupPage/Car.webp",
      title: "سواری",
    },
    {
      id: 2,
      src: "/images/digitalSignupPage/Bike.webp",
      title: "موتور",
    },
    {
      id: 3,
      src: "/images/digitalSignupPage/Truck.webp",
      title: "وانت",
    },
  ];

  return (
    <div className="mt-[67px] lg:mt-[100px] bg-green-00">
      <div className="py-10 bg-red-10 ">
        <div className="lg:flex lg:px-10 xl:px-14 2xl:px-28">
          <form className="flex flex-col items-center grow">
            <p className="text-2xl fontBold my-3">
              ثبت نام راننده پیک موتوری، وانت
            </p>
            <p className="text-gray-600 my-3">با هر کیلومتر درآمد کسب کنید!</p>
            <div
              className={`relative w-[70%] bg-green-00 text-center flex items-center mt-3 mb-1 border-black border rounded-lg ${
                states.isFocused || states.inputValue !== "" ? "border-2" : ""
              } ${states.error ? "border-red-500" : ""}`}
            >
              <input
                maxLength={11}
                className={`py-3 w-full outline-none bg-yellow-00 ltr placeholder-gray-400 pl-2 placeholder:font-semibold text-[17px] mx-1 `}
                type="text"
                placeholder={`${states.isFocused ? "09xxxxxxxxx" : ""}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={states.inputValue}
                id="mobile-number"
              />
              <label
                onClick={handleLabelClick}
                className={`absolute bg-white rounded-lg right-5 cursor-text text-gray-400 px-1 ltr transition-all duration-100 font-semibold ${
                  states.isFocused || states.inputValue !== ""
                    ? "text-sm -top-3 text-gray-700"
                    : "text-base top-3"
                } ${states.error ? "text-red-600" : ""}`}
                htmlFor="mobile-number"
              >
                شماره موبایل
              </label>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStates((prev) => ({
                      ...prev,
                      inputValue: "",
                      error: "",
                    }));
                  }}
                  className={` pl-2 pt-1 ${
                    !states.isFocused && !states.inputValue ? "hidden" : ""
                  } ${!states.error ? "text-green-600" : "text-red-600"}
                ${states.isFocused && !states.inputValue ? "hidden" : ""}
                
                `}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15 ```javascript 59z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {states.error && (
              <p className="text-red-600  text-sm  self-start mr-[20%] ">
                {states.error}
              </p>
            )}
            <button className="bg-blue-700 tracking-tighter text-md hover:bg-blue-600 text-white w-[70%] mt-4 py-3 rounded-lg">
              شروع ثبت نام
            </button>
          </form>

          {/* swiper div */}
          <div className="max-lg:w-[70%] mx-auto lg:w-[50%]">
            <Swiper
              pagination={{
                dynamicBullets: false,
              }}
              modules={[Pagination, Autoplay]}
              className=" rounded-lg my-10   h-[200px] md:h-[350px] xl:w-[600px] lg:w-[500px]"
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              speed={800}
            >
              <SwiperSlide className="relative w-full h-full">
                <Image
                  src={"/images/digitalSignupPage/4Mobile.webp"}
                  alt="market "
                  unoptimized={true}
                  className="h-full w-full"
                  layout="fill"
                ></Image>
              </SwiperSlide>
              <SwiperSlide className="relative w-full h-full">
                <Image
                  src={"/images/digitalSignupPage/2Mobile.webp"}
                  alt="market "
                  unoptimized={true}
                  className="h-full w-full"
                  layout="fill"
                ></Image>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* end of swiper div */}
        </div>
        <div className="px-5 ">
          <p className="text-2xl fontBold text-center">
            مدارک لازم برای ثبت نام
          </p>
          <p className="text-gray-500 mt-4 text-center font-semibold">
            با انتخاب هر وسیله نقلیه می توانید مدارک لازم برای ثبت نام آن وسیله
            را ببینید.
          </p>
          <div className="bg-yellow-10  bg-white w-[80%] mx-auto mt-5 flex items-center justify-center">
            {registerData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="px-3 py-2"
                  onClick={() =>
                    setStates((prev) => ({
                      ...prev,
                      selectedVehicleId: item.id,
                    }))
                  }
                >
                  <div
                    className={`filter grayscale border-2  rounded-xl px-3 py-1 w-fit  cursor-pointer  ${
                      states.selectedVehicleId === item.id
                        ? "border-blue-700 grayscale-0 shadow"
                        : "hover:bg-blue-50 border-transparent"
                    } `}
                  >
                    <Image
                      className="lg:w-32"
                      alt={item.title}
                      width={80}
                      height={80}
                      src={item.src}
                      unoptimized
                    />
                    <p className="text-gray-600 font-semibold text-center my-2 ">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`borde rounded-3xl mt-1 pt-2 mx-auto bg-white w-[80%]`}
          >
            <div
              className={`my-2  border rounded-3xl mt-4 py-5 px-3  ${
                states.selectedVehicleId === 1 ? "block" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold lg:text-2xl">
                مدارک لازم برای ثبت نام سواری
              </p>
              <ul className="mt-5 *:my-5  ">
                <li className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس گواهینامه (پشت و رو)</p>
                </li>
                <li className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس کارت خودرو (پشت و رو)</p>
                </li>
                <li className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">
                    عکس بیمه نامه شخص ثالث یا کد یکتای بیمه
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`my-2  border rounded-3xl mt-4 py-5 px-3  ${
                states.selectedVehicleId === 2 ? "block" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold lg:text-2xl">
                مدارک لازم برای ثبت نام پیک موتوری
              </p>
              <ul className="mt-5 *:my-5  ">
                <li className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس کارت ملی یا گواهینامه</p>
                </li>
                <li className="flex">
                  <svg
                    width="24"
                    className=" shrink-0 "
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس کارت موتور</p>
                </li>
                <p className="font-semibold text-lg lg:text-2xl">توجه کنید:</p>
                <li className="flex">
                  <svg
                    className=" shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">
                    اگر عکس گواهینامه‌تان را ندارید، می‌توانید عکس کارت ملی
                    هوشمند یا شناسنامه جدیدتان را بارگذاری کنید تا درصورت
                    صحت‌سنجی، سرویس اسنپ‌باکس برای‌تان فعال شود.
                  </p>
                </li>
                <li className="flex">
                  <svg
                    className=" shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">
                    اگر می‌خواهید با موتورتان هم مرسوله و هم مسافر جابه‌جا کنید،
                    لازم است تصویر بیمه‌نامه و گواهینامه موتورتان را بارگذاری
                    کنید.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`my-2  border rounded-3xl mt-4 py-5 px-3  ${
                states.selectedVehicleId === 3 ? "block" : "hidden"
              }`}
            >
              <p className="text-xl font-semibold lg:text-2xl">
                مدارک لازم برای ثبت نام وانت
              </p>
              <ul className="mt-5 *:my-5  font-medium">
                <li className="flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس گواهینامه:</p>
                </li>
                <p className="mr-8 leading-[1px] lg:text-xl">
                  پایه 3 برای وانت با ظرفیت 3,500 کیلو
                </p>
                <p className="mr-8 text-wrap lg:text-xl">
                  پایه 2 برای وانت با ظرفیت 3,800 کیلو به بالا
                </p>
                <li className="flex">
                  <svg
                    width="24"
                    className=" shrink-0 "
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">عکس کارت موتور</p>
                </li>
                <li className="flex">
                  <svg
                    className=" shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#E5EDFB"></circle>
                    <circle cx="12" cy="12" r="6" fill="#0048D9"></circle>
                  </svg>
                  <p className="mr-2 lg:text-xl">
                    عکس بیمه‌نامه شخص ثالث یا کد یکتای بیمه
                  </p>
                </li>
                <p className="font-semibold text-lg lg:text-2xl">توجه کنید:</p>
                <li className="flex">
                  <p className="mr-2 lg:text-xl">
                    وانت لازم است این ویژگی‌ها را داشته باشد:
                  </p>
                </li>
                <ul className="list-disc list-inside mr-2">
                  <li className="lg:text-lg">ظرفیت آن بالای ۱٬۳۶۰ کیلو باشد.</li>
                  <li className="lg:text-lg"> وانت حمل شیشه (خرک‌دار)‌ نباشد.</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
