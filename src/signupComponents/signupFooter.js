import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";
import Link from "next/link";

function SignupFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <div className="bg-[#252A3C] p-10  text-white mb-16 lg:mb-0 ">
      <div className="lg:w-[80%] lg:mx-auto">
        <div className="flex items-center justify-between">
          <svg
            width="83"
            height="49"
            viewBox="0 0 83 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.4789 32.6224C31.7875 32.6224 32.0778 32.6835 32.35 32.805C32.6217 32.927 32.8606 33.0941 33.0666 33.307C33.2724 33.5202 33.4342 33.7672 33.5517 34.0483C33.6692 34.33 33.7284 34.6302 33.7284 34.9495C33.7284 35.2688 33.6692 35.5693 33.5517 35.8505C33.4342 36.1321 33.2724 36.3791 33.0666 36.592C32.8606 36.8052 32.6217 36.9723 32.35 37.0938C32.0778 37.2158 31.7875 37.2764 31.4789 37.2764C31.1701 37.2764 30.8794 37.2158 30.6078 37.0938C30.3356 36.9723 30.0969 36.8052 29.891 36.592C29.6848 36.3791 29.5232 36.1321 29.4059 35.8505C29.288 35.5693 29.2295 35.2688 29.2295 34.9495C29.2295 34.6302 29.288 34.33 29.4059 34.0483C29.5232 33.7672 29.6848 33.5202 29.891 33.307C30.0969 33.0941 30.3356 32.927 30.6078 32.805C30.8794 32.6835 31.1701 32.6224 31.4789 32.6224ZM26.3392 32.6224C26.6477 32.6224 26.938 32.6835 27.2102 32.805C27.482 32.927 27.7206 33.0941 27.9269 33.307C28.1327 33.5202 28.2944 33.7672 28.4118 34.0483C28.5295 34.33 28.5887 34.6302 28.5887 34.9495C28.5887 35.2688 28.5295 35.5693 28.4118 35.8505C28.2944 36.1321 28.1327 36.3791 27.9269 36.592C27.7206 36.8052 27.482 36.9723 27.2102 37.0938C26.938 37.2158 26.6477 37.2764 26.3392 37.2764C26.0304 37.2764 25.7397 37.2158 25.4681 37.0938C25.1958 36.9723 24.9572 36.8052 24.7514 36.592C24.5451 36.3791 24.3834 36.1321 24.2662 35.8505C24.1483 35.5693 24.0898 35.2688 24.0898 34.9495C24.0898 34.6302 24.1483 34.33 24.2662 34.0483C24.3834 33.7672 24.5451 33.5202 24.7514 33.307C24.9572 33.0941 25.1958 32.927 25.4681 32.805C25.7397 32.6835 26.0304 32.6224 26.3392 32.6224ZM21.1997 32.6224C21.5081 32.6224 21.7983 32.6835 22.0706 32.805C22.3423 32.927 22.5813 33.0941 22.7873 33.307C22.9931 33.5202 23.1546 33.7672 23.2722 34.0483C23.3897 34.33 23.4489 34.6302 23.4489 34.9495C23.4489 35.2688 23.3897 35.5693 23.2722 35.8505C23.1546 36.1321 22.9931 36.3791 22.7873 36.592C22.5813 36.8052 22.3423 36.9723 22.0706 37.0938C21.7983 37.2158 21.5081 37.2764 21.1997 37.2764C20.8907 37.2764 20.6004 37.2158 20.3283 37.0938C20.0561 36.9723 19.8175 36.8052 19.6117 36.592C19.4055 36.3791 19.244 36.1321 19.1263 35.8505C19.0085 35.5693 18.9499 35.2688 18.9499 34.9495C18.9499 34.6302 19.0085 34.33 19.1263 34.0483C19.244 33.7672 19.4055 33.5202 19.6117 33.307C19.8175 33.0941 20.0561 32.927 20.3283 32.805C20.6004 32.6835 20.8907 32.6224 21.1997 32.6224ZM35.4928 18.9289L39.5119 18.9302V24.7351C39.5119 25.3127 39.5523 25.7803 39.6332 26.1381C39.6381 26.1602 39.6457 26.1797 39.6512 26.2013L39.72 26.3531C39.8168 26.55 39.935 26.7256 40.0752 26.8801C40.2502 27.0732 40.4591 27.2238 40.7016 27.3325C40.9302 27.4346 41.1709 27.4869 41.4242 27.4929H41.581C41.8341 27.4869 42.075 27.4346 42.3034 27.3325C42.5462 27.2238 42.755 27.0732 42.9302 26.8801C43.0989 26.6941 43.236 26.4773 43.342 26.2295C43.3463 26.2201 43.3593 26.1823 43.3621 26.1727C43.3657 26.1614 43.3692 26.1501 43.3721 26.1381C43.453 25.7803 43.4935 25.3127 43.4935 24.7351V18.9316L47.5122 18.9303L47.5131 24.9113C47.5315 25.2417 47.5656 25.5291 47.6187 25.7643C47.6994 26.1215 47.8429 26.4064 48.0487 26.6198C48.2251 26.8021 48.4234 26.9313 48.644 27.0074C48.644 27.0074 48.8408 27.1066 49.1937 27.1425H61.2582C61.5114 27.1364 61.7525 27.0842 61.981 26.982C62.2235 26.8736 62.4323 26.7227 62.6076 26.5296C62.7825 26.3369 62.9234 26.1105 63.031 25.8509C63.0368 25.8293 63.0443 25.81 63.0494 25.7876C63.13 25.4302 63.1707 24.9625 63.1707 24.3846V18.9618L67.1897 18.963L67.1907 26.4112V26.44C67.1899 26.5205 67.1883 26.5997 67.1846 26.678L67.1831 26.6974C67.1717 26.9258 67.1471 27.1472 67.1088 27.3639L67.1004 27.3706C66.6623 29.649 64.6692 31.3701 62.2758 31.3701L50.0884 31.3789C49.2943 31.3789 48.6143 31.2455 48.0485 30.9798C47.4827 30.7134 47.0008 30.3366 46.6038 29.8501C46.5235 29.752 46.4498 29.6508 46.3822 29.5472C45.481 30.6414 44.1217 31.3403 42.5985 31.3403L41.608 31.35H41.3973L40.4069 31.3403C38.8934 31.3403 37.5417 30.6512 36.6403 29.5692C36.5889 29.6432 36.5382 29.7173 36.4802 29.7884C36.0832 30.2749 35.6016 30.6517 35.0356 30.9178C34.4697 31.1839 33.7898 31.3626 32.9957 31.3626L32.9974 31.3631H16.86L17.4937 28.8011C17.4937 28.8011 17.71 27.6297 18.9615 27.2557C19.1529 27.1922 19.3675 27.1455 19.6131 27.1274H33.8901C34.2433 27.0915 34.44 26.9923 34.44 26.9923C34.6608 26.9162 34.859 26.787 35.0356 26.6048C35.2413 26.3914 35.3846 26.1064 35.4654 25.7492C35.4754 25.7045 35.4832 25.6531 35.4918 25.6051L35.4928 18.9289ZM73.2343 13.2764V31.3629H68.9118V13.2764H73.2343ZM12.3752 25.9603C13.8163 25.9603 14.9864 27.1707 14.9864 28.6615C14.9864 30.1523 13.8163 31.3631 12.3752 31.3631C10.9337 31.3631 9.76367 30.1523 9.76367 28.6615C9.76367 27.1707 10.9337 25.9603 12.3752 25.9603ZM18.014 13.2764L15.6945 22.4738C15.4133 23.601 14.4305 24.3886 13.305 24.3886H10.9797L13.7768 13.2764H18.014ZM41.4483 13.2861C41.757 13.2861 42.0471 13.3474 42.3195 13.4689C42.5913 13.5907 42.83 13.7579 43.036 13.9708C43.2419 14.1839 43.4035 14.4309 43.5213 14.7121C43.6388 14.9937 43.698 15.294 43.698 15.6133C43.698 15.9326 43.6388 16.2334 43.5213 16.5142C43.4035 16.7961 43.2419 17.0429 43.036 17.2558C42.83 17.469 42.5913 17.6361 42.3195 17.7576C42.0471 17.8796 41.757 17.94 41.4483 17.94C41.1397 17.94 40.8492 17.8796 40.5775 17.7576C40.305 17.6361 40.0663 17.469 39.8605 17.2558C39.6545 17.0429 39.4929 16.7961 39.3755 16.5142C39.2574 16.2334 39.1989 15.9326 39.1989 15.6133C39.1989 15.294 39.2574 14.9937 39.3755 14.7121C39.4929 14.4309 39.6545 14.1839 39.8605 13.9708C40.0663 13.7579 40.305 13.5907 40.5775 13.4689C40.8492 13.3474 41.1397 13.2861 41.4483 13.2861ZM11.2432 13.2764L11.495 13.9612L11.7472 13.2764H12.1403V14.434H11.8969V13.4998H11.8911L11.5667 14.434H11.4229L11.099 13.4998H11.0935V14.434H10.8496V13.2764H11.2432ZM10.7138 13.2764V13.4998H10.3731V14.4339H10.1046V13.4998H9.76368V13.2764H10.7138Z"
              fill="white"
            ></path>
          </svg>
          <button
            onClick={scrollToTop}
            className="flex bg-white text-[#252A3C] font-semibold py-3 px-3 rounded-full hover:bg-gray-100"
          >
            <AiOutlineArrowUp size={20} />
            <span className="mr-2">بازگشت به بالا</span>
          </button>
        </div>
        <div className="flex flex-col space-y-5 mt-9">
          <div className="flex  ">
            <Link href={"/"}>
              <p className="ml-7">دریافت اپلیکیشن</p>
            </Link>
            <Link href={"/"}>
              <p>حریم خصوصی</p>
            </Link>
          </div>
          <div className="flex ">
            <Link href={"/"}>
              <p className="ml-7">قوانین و مقررات </p>
            </Link>
            <Link href={"/"}>
              <p>پشتیبانی </p>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center">
          <p className="text-sm text-center leading-6 mb-7 lg:mb-0">
            کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن‌های
            موبایل) متعلق به ایده گزین ارتباطات روماک (اسنپ) است.
          </p>
          <div className="flex lg:mr-7">
            <AiOutlineInstagram className="ml-5" size={25} />
            <FaTelegramPlane size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFooter;