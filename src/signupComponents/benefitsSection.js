import React, { useEffect, useRef } from "react";
import Image from "next/image";
function BenefitsSection() {
  const data = [
    {
      id: 1,
      title: "مدیریت درآمد",
      details:
        "با رانندگی در مسیرهای دلخواه و اوقات آزاد خود، درآمد بیشتری داشته ‌باشید.",
      src: "/images/digitalSignupPage/Money.webp",
    },
    {
      id: 2,
      title: "انواع طرح‌های تشویقی",
      details:
        "با رانندگی در اسنپ از طرح‌های تشویقی متنوع، پاداش‌ها و جوایز دوره‌ای برخوردار شوید.",
      src: "/images/digitalSignupPage/Gift.webp",
    },
    {
      id: 3,
      title: "رئیس خودتان باشید",
      details:
        "در هر ساعت از شبانه‌روز و در هر مسیری که دوست دارید، پشت فرمان بنشینید و درآمدزایی کنید.",
      src: "/images/digitalSignupPage/Clock.webp",
    },
  ];
  return (
    <div className=" bg-green-30 py-10 px-5 mt-10">
      <div className=" bg-blue-30">
        <div>
          <p className="fontBold  text-2xl text-center mb-5 md:text-4xl">
            مزایای اسنپ رانندگان
          </p>
          <p className=" font-semibold text-gray-600 text-center md:text-lg lg:mt-12">
            در اسنپ با هر وسیله نقلیه‌ای که دارید می توانید فعالیت کنید.
          </p>
        </div>
        <div className="my-12 md:flex md:gap-5 md:flex-wrap md:justify-center bg-red-10 md:w-[80%] md:mx-auto">
          {data.map((item) => {
            return (
              <div
                className="bg-yellow-10 my-5 md:my-0 rounded-2xl border-2 p-6 md:w-[380px] md:h-[250px] lg:mx-auto"
                key={item.id}
              >
                <div className="flex items-center ">
                  <Image
                    src={item.src}
                    alt={item.title}
                    height={50}
                    width={50}
                    unoptimized
                  ></Image>
                  <p className="fontBold text-lg mr-5 md:text-2xl">
                    {item.title}
                  </p>
                </div>
                <p className="text-gray-600  mt-6  md:text-xl">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
