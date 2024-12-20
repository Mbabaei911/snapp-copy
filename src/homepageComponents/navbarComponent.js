import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar } from "../ReduxFeatures/toggleNavbarSlice";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  /////////
  ///states for toggling navbar
  const navbarIsToggled = useSelector(
    (state) => state.toggleNavbar.navbarIsToggled
  );
  const dispatch = useDispatch();
  const isStartSignupVisible = useSelector(
    (state) => state.startSignup.isVisible
  );

  ///////////
  ///route for changing logo per page
  const router = useRouter();
  let currentPath = router.pathname;
  // console.log(currentPath);

  const logoSrc =
    currentPath === "/digitalSignup"
      ? "/images/homePage/navbar/snappLogoSignup.png"
      : "/images/homePage/navbar/snappTextLogo.svg";

  const desktopNavbar = () => {
    if (currentPath == "/") {
      return (
        <div className="bg-white py-8 max-lg:hidden border shadow-sm">
          <div className="w-[90%]  flex items-center  mx-auto  ">
            <div className=" ml-10">
              <Link href={"/"}>
                <Image
                  src={logoSrc}
                  alt="snapp text logo"
                  height={40}
                  width={90}
                  unoptimized
                />
              </Link>
            </div>
            <div className="flex items-center gap-x-7">
              <div className="flex items-center ">
                <div className="group">
                  <div className="flex items-center cursor-default">
                    <p>سوپر اپ اسنپ</p>
                    <BsChevronDown size={15} className="mr-3" />
                  </div>
                  <div className="group-hover:block hidden absolute bg-white w-44 p-2 rounded-lg border translate-x-6 transition-all transform duration-200">
                    <ul className="*:py-3 *:cursor-pointer ">
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>درخواست تاکسی</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>پیک موتوری</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>سفارش آنلاین غذا</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>سوپرمارکت</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>رزرو بلیط هواپیما</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>رزرو بلیط قطار </Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>رزرو بلیط اتوبوس</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>رزرو هتل </Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>درخواست وانت بار</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>خدمات اسباب کشی</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>پزشک و مشاور</Link>
                      </li>
                      <li className="hover:fontBold hover:primaryColor ">
                        <Link href={"/"}>اسنپ پرو</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Link href={"/digitalSignup"}><p className="cursor-pointer ">ثبت نام راننده اسنپ</p></Link>
              </div>
              <div>
                <p className="cursor-pointer "> باشگاه رانندگان</p>
              </div>
              <div>
                <p className="cursor-pointer "> پنل سازمانی</p>
              </div>
              <div>
                <p className="cursor-pointer "> بلاگ</p>
              </div>
              <div className="group">
                <div className="flex items-center cursor-default">
                  <p>درباره اسنپ</p>
                  <BsChevronDown size={15} className="mr-3" />
                </div>
                <div className="group-hover:block hidden absolute bg-white w-40 p-2 rounded-lg border translate-x-6">
                  <ul className="*:py-3 *:cursor-pointer ">
                    <li className="hover:fontBold hover:primaryColor ">
                      <Link href={"/"}> فرصتهای شغلی</Link>
                    </li>
                    <li className="hover:fontBold hover:primaryColor ">
                      <Link href={"/"}> تماس با ما</Link>
                    </li>
                    <li className="hover:fontBold hover:primaryColor ">
                      <Link href={"/"}> درباره ما</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div></div>

            <div
              className={`flex items-center ${
                currentPath === "/" ? "hidden" : "block"
              }`}
            >
              <button className="px-5 py-3 text-sm font-semibold bg-calcSectionColor hover:bg-blue-700 text-white rounded-lg ml-4">
                ثبت نام رانندگان
              </button>
              <button className="px-5 py-3 text-sm font-semibold bg-white text-calcSectionColor border border-calcSectionColor hover:bg-gray-100 rounded-lg">
                پیگیری ثبت نام
              </button>
            </div>
          </div>
        </div>
      );
    } else if (currentPath == "/digitalSignup") {
      return (
        <div className="bg-white py-5 max-lg:hidden border shadow-sm">
          <div className="w-[90%]  flex items-center  mx-auto bg-red-40 justify-between ">
            <div className="bg-green-30 ml-10 flex text-gray-700 ">
              <Link href={"/"}>
                <Image
                  src={logoSrc}
                  alt="snapp text logo"
                  height={40}
                  width={90}
                  unoptimized
                />
              </Link>

              <div className="flex items-center gap-x-7 mr-8">
                <div>
                  <p className="cursor-pointer ">بلاگ </p>
                </div>
                <div>
                  <p className="cursor-pointer ">درباره ما</p>
                </div>
                <div>
                  <p className="cursor-pointer ">تماس با ما</p>
                </div>
                <div>
                  <p className="cursor-pointer "> باشگاه رانندگان</p>
                </div>
                <div>
                  <p className="cursor-pointer "> دریافت اسنپ رانندگان </p>
                </div>
              </div>
            </div>
            <div
              className={`flex items-center
              }`}
            >
              <button
                className={`px-5 py-3 text-sm font-semibold bg-calcSectionColor hover:bg-blue-700 text-white rounded-lg ml-4 ${
                  isStartSignupVisible ? "block" : "hidden"
                }`}
              >
                ثبت نام رانندگان
              </button>
              <button className="px-5 py-3 text-sm font-semibold bg-white text-calcSectionColor border border-calcSectionColor hover:bg-gray-100 rounded-lg">
                پیگیری ثبت نام
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const mobileNavbar = () => {
    if (currentPath == "/") {
      return (
        <div className="flex py-5 px-8 items-center justify-between border-b lg:hidden  bg-white w-full z-50 ">
          <button onClick={() => dispatch(toggleNavbar())}>
            {navbarIsToggled ? (
              <AiOutlineClose size={22} />
            ) : (
              <RxHamburgerMenu size={22} />
            )}
          </button>
          <Link href={"/"}>
            <Image
              src={logoSrc}
              alt="snapp-text-logo"
              height={250}
              width={90}
              unoptimized
              className="cursor-pointer"
            ></Image>
          </Link>
        </div>
      );
    } else if (currentPath == "/digitalSignup") {
      return (
        <div className="flex py-5 px-5 items-center justify-between border-b lg:hidden  bg-white w-full z-50 ">
          <button onClick={() => dispatch(toggleNavbar())}>
            {navbarIsToggled ? (
              <AiOutlineClose size={22} />
            ) : (
              <RxHamburgerMenu size={22} />
            )}
          </button>
          <Link href={"/"}>
            <Image
              src={logoSrc}
              alt="snapp-text-logo"
              height={250}
              width={90}
              unoptimized
              className="cursor-pointer"
            ></Image>
          </Link>
        </div>
      );
    }

    // return <div>navbarComponent</div>;
  };

  return (
    <div className="fixed z-50 right-0 top-0 left-0 m-0">
      {/* navbar for mobile */}
      {mobileNavbar()}
      {/* end of navbar for mobile */}

      {/* navbar for desktop */}
      {desktopNavbar()}
      {/* end of navbar for desktop */}
    </div>
  );
};

export default Navbar;
