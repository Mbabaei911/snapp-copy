import React from "react";
import Link from "next/link";
import Image from "next/image";
function SecondSectionComponent() {
  const data = [
    {
      id: 1,
      description: "تاکسی اینترنتی",
      detail: "درخواست آنلاین خودرو",
      src: "/images/secondSection/taxi.svg",
      href: "/",
    },
    {
      id: 2,
      description: "سفارش آنلاین غذا",
      detail: "سفارش غذا، نان و شیرینی با اسنپ",
      src: "/images/secondSection/food.svg",
      href: "/",
    },
    {
      id: 3,
      description: "سوپرمارکت آنلاین",
      detail: "تهیه اقلامروزانه با اسنپ",
      src: "/images/secondSection/Market-Orange-Final.png",
      href: "/",
    },
    {
      id: 4,
      description: "پیک موتوری",
      detail: "حمل و نقل انواع بسته",
      src: "/images/secondSection/bike.svg",
      href: "/",
    },
    {
      id: 5,
      description: "درخواست وانت",
      detail: "حمل و نقل انواع بار",
      src: "/images/secondSection/pickup.svg",
      href: "/",
    },
    {
      id: 6,
      description: "سرویس اعتباری",
      detail: "خرید قسطی با اسنپ",
      src: "/images/secondSection/Credit.svg",
      href: "/",
    },
    {
      id: 7,
      description: "بلیط هواپیما داخلی",
      detail: "خرید بلیط پرواز داخلی",
      src: "/images/secondSection/fdom-t.png",
      href: "/",
    },
    {
      id: 8,
      description: "بلیط هواپیما خارجی",
      detail: "خرید بلیط پرواز خارجی",
      src: "/images/secondSection/intflight.svg",
      href: "/",
    },
    {
      id: 9,
      description: "رزرو هتل",
      detail: "رزرو آنلاین هتل",
      src: "/images/secondSection/hotel.svg",
      href: "/",
    },
    {
      id: 10,
      description: "بلیط اتوبوس",
      detail: "گردشگری با اسنپ",
      src: "/images/secondSection/bus.svg",
      href: "/",
    },
    {
      id: 11,
      description: "بلیط قطار",
      detail: "گردشگری با اسنپ",
      src: "/images/secondSection/train.svg",
      href: "/",
    },
    {
      id: 12,
      description: "فروشگاه",
      detail: "فروشگاه اسنپ",
      src: "/images/secondSection/shop.svg",
      href: "/",
    },
    {
      id: 13,
      description: "پزشک و مشاور",
      detail: "درمان با اسنپ",
      src: "/images/secondSection/doctor.svg",
      href: "/",
    },
    {
      id: 14,
      description: "داروخانه",
      detail: "داروخانه آنلاین اسنپ",
      src: "/images/secondSection/pharmacy.svg",
      href: "/",
    },
    {
      id: 15,
      description: "بیمه",
      detail: "خرید آنلاین بیمه با اسنپ",
      src: "/images/secondSection/Insurance.png",
      href: "/",
    },
    {
      id: 16,
      description: "اسباب کشی منزل",
      detail: "خدمات اسباب کشی",
      src: "/images/secondSection/moving.svg",
      href: "/",
    },
    {
      id: 17,
      description: "ثبت نام راننده  ",
      detail: "ثبت نام تاکسی اینترنتی اسنپ",
      src: "/images/secondSection/driver.svg",
      href: "/",
    },
    {
      id: 18,
      description: "اسنپ!کلاب",
      detail: "باشگاه مشتریان اسنپ",
      src: "/images/secondSection/club.svg",
      href: "/",
    },
    {
      id: 19,
      description: "خرید شارژ",
      detail: "خرید آنلاین شارژ",
      src: "/images/secondSection/wallet.png",
      href: "/",
    },
    {
      id: 20,
      description: "خرید بسته اینترنت",
      detail: "خرید بسته اینترنت",
      src: "/images/secondSection/wallet.png",
      href: "/",
    },
    {
      id: 21,
      description: "اسنپ پرو",
      detail: "اشتراک حرفه ای اسنپ",
      src: "/images/secondSection/Pro.png",
      href: "/",
    },
  ];

  return (
    <div className="bg-[#f2f5f8]">
      <div className="text-center py-20">
        <p className="fontBold text-xl xl:text-4xl">
          یک اپلیکیشن، برای تمام نیازها
        </p>
      </div>
      <div className="grid grid-cols-3  gap-7  pb-10 px-8 xl:w-[90%] 2xl:w-[75%] xl:mx-auto">
        {/* for mobile */}
        {data.map((item) => {
          return (
            <div
              className="bg-white border rounded-3xl lg:hidden"
              key={item.id}
            >
              <Link
                href={item.href}
                className="flex flex-col items-center py-4"
              >
                <div>
                  <Image
                    src={item.src}
                    alt={`${item.description}`}
                    height={60}
                    width={60}
                    unoptimized
                  />
                </div>
                <div>
                  <p className="fontBold text-sm text-wrap mt-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
        {/* for desktop */}

        {data.map((item) => {
          return (
            <div
              className="bg-white border rounded-3xl max-lg:hidden"
              key={item.id}
            >
              <Link href={item.href} className="flex px-4 py-4">
                <div>
                  <Image
                    src={item.src}
                    alt={`${item.description}`}
                    height={60}
                    width={60}
                    unoptimized
                  />
                </div>
                <div className="space-y-3 mr-3">
                  <p className="fontBold text-md text-wrap ">
                    {item.description}
                  </p>
                  <p className="text-gray-400">{item.detail}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondSectionComponent;
