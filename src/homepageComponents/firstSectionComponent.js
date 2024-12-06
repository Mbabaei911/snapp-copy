import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs"; // Import an icon for the close button
import Image from "next/image";
function FirstSectionComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="  ">
      {/* first section mobile */}
      <div className="bg-primaryColor px-6 py-10 mt-[67px]  text-white lg:hidden ">
        <p className=" text-2xl fontBold ">
          تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
        </p>
        <p className="text-lg py-6">
          از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
          رزرو هتل و... را میتوانید با اسنپ انجام دهید.
        </p>
        <button className="block bg-white py-3 rounded-lg fontBold text-sm w-full hover:bg-gray-50 text-gray-900">
          دانلود اپلیکیشن اسنپ
        </button>
      </div>
      {/*end of first section mobile */}
      {/* first section desktop */}
      <div className="flex max-lg:hidden mt-20 ">
        <div className=" flex-1 bg-primaryColor py-8 px-10 text-white  ">
          <div className="2xl:w-[75%]  flex flex-col items-start 2xl:mr-auto">
            <h1 className=" text-4xl fontBold leading-snug">
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h1>
            <p className="text-lg py-6">
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
              سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.
            </p>
            <div className="flex items-center ">
              <div className="flex items-center border-b w-[290px]">
                <input
                  className="bg-transparent  p-3 placeholder:text-gray-300 outline-none w-72"
                  dir="rtl"
                  type="tel"
                  placeholder="09xxxxx6789"
                  value={inputValue}
                  onChange={handleChange}
                />
                <div className="   ">
                  {inputValue === "" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-gray-300"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="5" />
                    </svg>
                  ) : (
                    <BsXCircle
                      size={20}
                      className="text-white  cursor-pointer"
                      onClick={handleClear}
                    />
                  )}
                </div>
              </div>
              <button className="text-primaryColor bg-white px-7 py-3 rounded-lg fontBold text-sm mr-4 hover:bg-gray-100">
                ارسال لینک
              </button>
            </div>
            <button className="bg-transparent py-3 px-9 border-white border rounded-lg my-9 text-lg fontBold hover:bg-white/10 transition-all duration-100">
              ورود به وب اپلیکیشن اسنپ
            </button>
          </div>
        </div>
        <div className="bg-red-400 flex-1 z-[-1]">
          <div className="w-full h-full overflow-hidden relative">
            <Image
              className="scale-x-[-1] object-cover"
              src={"/images/homePage/firstSection/intro_desktop.jpg"}
              unoptimized
              alt="intro page"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
      {/* end of first section desktop */}
    </div>
  );
}

export default FirstSectionComponent;
