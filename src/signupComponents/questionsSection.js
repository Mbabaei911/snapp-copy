import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

function QuestionSection() {
  const data = [
    {
      id: 1,
      question: "چند نفر می‌توانند با یک ماشین در اسنپ رانندگان ثبت‌نام کنند؟",
      answer:
        "حداکثر ۳ نفر می‌توانند با یک ماشین در اسنپ رانندگان ثبت‌نام و فعالیت کنند.",
    },
    {
      id: 2,
      question: "چند روز بعد از ثبت‌نام حسابم فعال می‌شود؟",
      answer:
        "بین یک تا ۳ روز شما را با پیامک از وضعیت ثبت‌نامتان باخبر می‌‌کنیم.",
    },
    {
      id: 3,
      question: "آیا با هر مدل خودرویی می‌توانم در اسنپ رانندگان ثبت‌نام کنم؟",
      answer:
        "متأسفانه، این مدل از خودروها امکان ثبت‌نام در اسنپ رانندگان را ندارند:",
    },
    {
      id: 4,
      question: "چطور می‌توانم وضعیت ثبت‌نامم را پیگیری کنم؟",
      answer:
        "با زدن روی این لینک می‌توانید وضعیت ثبت‌نامتان را پیگیری کنید  همچنین می‌توانید روی دکمه «پیگیری ثبت‌نام» در نوار بالای همین صفحه بزنید.",
    },
    {
      id: 5,
      question: "حداقل سن برای ثبت‌نام در اسنپ رانندگان چقدر است؟",
      answer:
        "برای ثبت‌نام در اسنپ‌ رانندگان لازم است حداقل ۱۸ سال داشته باشید.",
    },
    {
      id: 6,
      question: "گواهی عدم سوءپیشینه برای ثبت‌نام در اسنپ رانندگان لازم است؟",
      answer:
        "بعد از ثبت‌نام، تیم امنیت اسنپ برای اطمینان از عدم سوءپیشینه استعلام آن را از پلیس می‌گیرد.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-yellow-10 p-5 lg:w-[80%] lg:mx-auto">
      <div>
        <p className="text-3xl fontBold text-center">پرسش های پرتکرار</p>
      </div>
      <div className="mt-10 bg-red-10 ">
        {data.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className="mb-4 questionsShadow borde rounded-lg ">
              <div
                className={`flex justify-between items-center cursor-pointer px-5 py-5 bg-white  border-b ${
                  isOpen ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <p className="text-md  md:text-xl font-semibold">
                  {item.question}
                </p>
                <FaChevronDown
                  size={15}
                  className={`transition-transform duration-200 mx-2 text-gray-500 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out  ${
                  isOpen ? "max-h-40 " : "max-h-0"
                }`}
              >
                <div className="py-8 leading-7 px-5  rounded text-sm text-gray-600 md:text-lg">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionSection;
