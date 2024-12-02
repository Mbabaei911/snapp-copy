import React from "react";
import Image from "next/image";

function DriversSection() {
  const data = [
    {
      id: 1,
      src: "/images/drivers/180x100-income.png",
      title: "درآمد تضمینی + پاداش های ماهانه و هفتگی",
      description:
        "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
    },
    {
      id: 2,
      src: "/images/drivers/180x100-hour.png",
      title: "مزایا و خدمات باشگاه رانندگان",
      description:
        "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
    },
    {
      id: 3,
      src: "/images/drivers/180x100-benefits.png",
      title: "ساعت کاری دلخواه",
      description:
        "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
    },
    {
      id: 4,
      src: "/images/drivers/180x100-carfix.png",
      title: "کار‌فیکس",
      description:
        "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
    },
    {
      id: 5,
      src: "/images/drivers/safety.svg",
      title: "امنیت سفر کاربران راننده در اسنپ",
      description:
        "اسنپ با ارائه سرویس امنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می‌‌کند تجربه سفر با اسنپ برای کاربران راننده امن‌ و مطمئن باشد.",
    },
    {
      id: 6,
      src: "/images/drivers/support.svg",
      title: " پشتیبانی ۲۴ ساعته و سریع",
      description:
        "تیم پشتیبانی اسنپ در تمامی ساعت‌های شبانه‌روز پاسخگوی سوال‌ها و مشکلات کاربران راننده است. بخش «پشتیبانی» در اپلیکیشن رانندگان، سریع‌ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است",
    },
  ];
  return (
    <div className="bg-gray-100 px-5 py-10">
      <div className="bg-red-20  w-full">
        <p className="text-3xl fontBold text-gray-800 ">
          در کمتر از 10 دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید.
        </p>
        <p className="text-xl mt-7 text-gray-600">
          بدون نیاز به مراجعه حضوری، از طریق این صفحه، تمام مراحل ثبت نام را
          اینترنتی انجام دهید
        </p>
        <button className="bg-primaryColor px-9 py-3 text-white fontBold rounded-lg hover:bg-primaryColor/85 mx-auto block my-8 transition-all duration-200 ease-in">
          ثبت نام رانندگان
        </button>
        <video
          controls
          //   width="600"
          className="rounded-lg xl:w-[80%] xl:mx-auto"
          controlslist="nodownload"
          poster="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbcovernew.webp"
        >
          <source src="/images/drivers/jazbranandeh1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* cards for mobile version */}
      <div className="mt-14 lg:hidden">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white shadow py-12 px-7 my-5 rounded-2xl"
            >
              <Image
                alt="logo"
                src={item.src}
                width={100}
                height={100}
                unoptimized
                className="mx-auto"
              />
              <p className="my-3 fontBold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          );
        })}
      </div>
      {/* cards for desktop */}
      <div className="mt-14 grid grid-cols-2 gap-6 max-lg:hidden xl:w-[80%] mx-auto">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white shadow py-12 px-7 my- rounded-2xl flex"
            >
              <Image
                alt="logo"
                src={item.src}
                width={110}
                height={100}
                unoptimized
                className=""
              />
              <div className="">
                <p className="my-3 fontBold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DriversSection;
