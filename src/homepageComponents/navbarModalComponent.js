import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

function NavbarModal() {
  //getting global navbar state from redux toolkit
  const navbarIsToggled = useSelector(
    (state) => state.toggleNavbar.navbarIsToggled
  );

  ////
  ////local states

  const [states, setStates] = useState({
    isVisible: false,
    showModal: false,
    firstDropdown: false,
    secondDropdown: false,
    thirdDropdown: false,
  });

  //////////////
  ///adding functionality for appearing and disappearing
  useEffect(() => {
    if (navbarIsToggled) {
      setStates((prevStates) => ({ ...prevStates, isVisible: true }));
      const timer = setTimeout(() => {
        setStates((prevStates) => ({ ...prevStates, showModal: true }));
      }, 100); // Adjust the delay time (in milliseconds) for the modal appearance

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    } else {
      setStates((prevStates) => ({ ...prevStates, showModal: false }));
      const timer = setTimeout(() => {
        setStates((prevStates) => ({ ...prevStates, isVisible: false }));
      }, 200); // Adjust the delay time (in milliseconds) for the background disappearance

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [navbarIsToggled]);

  ///////////
  ///JSX
  return (
    <div
      className={`bg-black/20 w-full h-full fixed z-10 lg:hidden ${
        states.isVisible ? "block" : "hidden"
      }`}
      aria-hidden={!states.isVisible}
    >
      <div
        className={`bg-blue-2 bg-white  overflow-y-scroll p-5 h-[93vh] overflow-x-hidden transition-transform duration-100 ease-linear transform  ${
          states.showModal
            ? "translate-x-0 translate-y-0 "
            : "translate-x-full "
        }`}
      >
        <div className="overflow-hidden  ">
          <div
            onClick={() =>
              setStates((prevStates) => ({
                ...prevStates,
                firstDropdown: !states.firstDropdown,
              }))
            }
            className="flex items-center justify-between cursor-pointer bg-gray-20 py-3    relative z-20"
          >
            <p className="fontBold ">سوپراپ اسنپ</p>
            <button>
              {states.firstDropdown ? (
                <BsChevronUp size={22} />
              ) : (
                <BsChevronDown size={22} />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-10 transition-all duration-100 ease-linear transform ${
              states.firstDropdown ? "max-h-[600px] " : "max-h-0 "
            }`}
          >
            <div className="py-3">
              <Link href={"/"}>درخواست تاکسی</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>پیک موتوری</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>سفارش آنلاین غذا</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>سوپرمارکت</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>رزرو بلیط قطار</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>رزرو بلیط اتوبوس</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>رزرو هتل</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>درخواست وانت بار</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>خدمات اسباب کشی</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>پزشک و مشاور</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}>اسنپ پرو</Link>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p>
            ثبت نام راننده اسنپ
            <span className="primaryColor">(سواری، موتور و وانت)</span>
          </p>
        </div>
        <div className="py-4">
          <p>باشگاه رانندگان</p>
        </div>
        <div className="py-4">
          <p>پنل سازمانی </p>
        </div>
        <div className="py-4">
          <p>بلاگ </p>
        </div>
        <div>
          <div
            onClick={() =>
              setStates((prevStates) => ({
                ...prevStates,
                secondDropdown: !states.secondDropdown,
              }))
            }
            className="flex items-center justify-between cursor-pointer bg-gray-20 py-3    relative z-20"
          >
            <p className="fontBold ">درباره اسنپ</p>
            <button>
              {states.secondDropdown ? (
                <BsChevronUp size={22} />
              ) : (
                <BsChevronDown size={22} />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-10 transition-all duration-100 ease-in transform overflow-hidden border-b ${
              states.secondDropdown ? "max-h-[200px] " : "max-h-0 "
            }`}
          >
            <div className="py-3">
              <Link href={"/"}> فرصت های شغلی</Link>
            </div>
            <div className="py-3">
              <Link href={"/"}> درباره ما </Link>
            </div>
            <div className="py-3">
              <Link href={"/"}> تماس با ما </Link>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              setStates((prevStates) => ({
                ...prevStates,
                thirdDropdown: !states.thirdDropdown,
              }))
            }
            className="flex items-center justify-between cursor-pointer bg-gray-20 py-3    relative z-20"
          >
            <p className="fontBold primaryColor">اپلیکیشن اسنپ</p>
            <button className="primaryColor">
              {states.thirdDropdown ? (
                <BsChevronUp size={22} />
              ) : (
                <BsChevronDown size={22} />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-10 transition-all  duration-100 ease-in transform overflow-hidden  ${
              states.thirdDropdown ? "max-h-[200px] " : "max-h-0 "
            }`}
          >
            <div className="py-3  ">
              <Link href={"/"} className="flex items-center justify-start ">
                <Image
                  className="ml-4"
                  alt="cafe bazar logo "
                  src={"/images/homePage/navbar/directdownload-icon.png"}
                  height={25}
                  width={25}
                  unoptimized
                />
                <p> دانلود مستقیم</p>
              </Link>
            </div>
            <div className="py-3  ">
              <Link href={"/"} className="flex items-center justify-start ">
                <Image
                  className="ml-4"
                  alt="cafe bazar logo "
                  src={"/images/homePage/navbar/cafebazaar.png"}
                  height={25}
                  width={25}
                  unoptimized
                />
                <p>دانلود از کافه&zwnj;بازار</p>
              </Link>
            </div>
            <div className="py-3  ">
              <Link href={"/"} className="flex items-center justify-start ">
                <Image
                  className="ml-4"
                  alt="cafe bazar logo "
                  src={"/images/homePage/navbar/myketmarketicon.png"}
                  height={25}
                  width={25}
                  unoptimized
                />
                <p> دانلود از مایکت </p>
              </Link>
            </div>
            <div className="py-3  ">
              <Link href={"/"} className="flex items-center justify-start ">
                <Image
                  className="ml-4"
                  alt="cafe bazar logo "
                  src={"/images/homePage/navbar/snapp-pwa.svg"}
                  height={25}
                  width={25}
                  unoptimized
                />
                <p>
                  وب اپلیکیشن اسنپ <bdi>(ios)</bdi>
                </p>
              </Link>
            </div>
            <div className="py-3  ">
              <Link href={"/"} className="flex items-center justify-start ">
                <Image
                  className="ml-4"
                  alt="cafe bazar logo "
                  src={"/images/homePage/navbar/apple.png"}
                  height={25}
                  width={25}
                  unoptimized
                />
                <p>دانلود از اپ استور</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarModal;
