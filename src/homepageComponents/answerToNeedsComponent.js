import React from "react";
import Image from "next/image";

function AnswerToNeedsComponent() {
  return (
    <div>
      {/* for mobile version */}
      <div className="lg:hidden">
        <div className="mb-5 ">
          <Image
            src={"/images/homePage/swiper/super-app.jpg"}
            alt={"super app image"}
            unoptimized
            width={2000}
            height={2000}
          ></Image>
        </div>
        <div className="px-4 py-2">
          <div>
            <p className="text-[22px] fontBold  mb-5 text-gray-700">
              سوپر اپ اسنپ؛ پاسخی به تمام نیازها
            </p>
            <p className="text-gray-500 text-md">
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </p>
          </div>
          <div>
            <div className="bg-gray-100 rounded-2xl mt-9 hover:scale-95 transition-all duration-100">
              <Image
                src={"/images/homePage/answerToNeeds/easy.png"}
                alt="easy pic "
                width={200}
                unoptimized
                height={200}
                className="mx-auto"
              ></Image>
            </div>
            <p className="text-[18px] fontBold  my-5 text-gray-700">آسان</p>
            <p className="text-gray-500 text-xs ">
              برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد
              اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
            </p>
          </div>
          <div className="my-5">
            <div className="bg-gray-100 rounded-2xl mt-9 hover:scale-95 transition-all duration-100">
              <Image
                src={"/images/homePage/answerToNeeds/fast.png"}
                alt="easy pic "
                width={200}
                unoptimized
                height={200}
                className="mx-auto"
              ></Image>
            </div>
            <p className="text-[18px] fontBold  my-5 text-gray-700">سریع</p>
            <p className="text-gray-500 text-xs ">
              قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
              می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
            </p>
          </div>
          <div className="my-5">
            <div className="bg-gray-100 rounded-2xl mt-9 hover:scale-95 transition-all duration-100">
              <Image
                src={"/images/homePage/answerToNeeds/eco.png"}
                alt="easy pic "
                width={200}
                unoptimized
                height={200}
                className="mx-auto"
              ></Image>
            </div>
            <p className="text-[18px] fontBold  my-5 text-gray-700">به صرفه</p>
            <p className="text-gray-500 text-xs lg:text-lg">
              سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا
              بهترین خدمات را با قیمتی منطقی دریافت کنید.
            </p>
          </div>
        </div>
      </div>

      {/* for desktop version */}
      <div className="max-lg:hidden  mb-5">
        <div className="flex ">
          <div className="grow">
            <Image
              src={"/images/homePage/answerToNeeds/super-app.jpg"}
              alt="super app image"
              width={1000}
              height={1000}
              unoptimized
              priority
            />
          </div>
          <div className="grow px-9 w-[65%] mt-8">
            <p className="text-[22px] fontBold  mb-5 text-gray-700">
              سوپر اپ اسنپ؛ پاسخی به تمام نیازها
            </p>
            <p className="text-gray-700 text-sm w-[80%] text-balance">
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-3 gap-4 bg-yellow-40 w-[85%] 2xl:w-[70%] mx-auto -translate-y-16">
          <div className="borde border-blac mx-auto">
            <Image
              src={"/images/homePage/answerToNeeds/easy.png"}
              alt="easy pic "
              width={220}
              unoptimized
              height={250}
              className="   bg-gray-100 rounded-2xl hover:scale-105 transition-all"
            ></Image>
            <div className="borde w-[220px] ">
              <p className="text-[18px] fontBold my-3  text-gray-700">آسان</p>
              <p className="text-gray-500 text-xs lg:text-sm">
                برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد
                اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
              </p>
            </div>
          </div>
          <div className="borde border-blac mx-auto">
            <Image
              src={"/images/homePage/answerToNeeds/fast.png"}
              alt="fast pic "
              width={220}
              unoptimized
              height={250}
              className="   bg-gray-100 rounded-2xl hover:scale-105 transition-all"
            ></Image>
            <div className="borde w-[220px] ">
              <p className="text-[18px] fontBold my-3  text-gray-700">سریع</p>
              <p className="text-gray-500 text-xs lg:text-sm">
                قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
                می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
              </p>
            </div>
          </div>
          <div className="borde border-blac mx-auto">
            <Image
              src={"/images/homePage/answerToNeeds/eco.png"}
              alt="eco pic "
              width={220}
              unoptimized
              height={250}
              className="   bg-gray-100 rounded-2xl hover:scale-105 transition-all"
            ></Image>
            <div className="borde w-[220px] ">
              <p className="text-[18px] fontBold my-3  text-gray-700">
                به صرفه
              </p>
              <p className="text-gray-500 text-xs lg:text-sm">
                سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند
                تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerToNeedsComponent;
