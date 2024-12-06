import { TbBrandTelegram } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import Image from "next/image";
function FooterComponent() {
  return (
    <footer className="py-16 px-4 bg-white">
      <div className="flex justify-center *:text-nowrap flex-wrap *:mx-2  *:text-gray-700 *:my-3 ">
        <Link className="hover:text-primaryColor" href={"/"}>
          <p>فرصت های شغلی</p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> بلاگ </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> شرایط و قوانین </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> پنل سازمانی </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> سوالات متداول </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> باشگاه رانندگان </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> ثبت نام راننده اسنپ </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> درباره ما </p>
        </Link>
        <Link className="hover:text-primaryColor" href={"/"}>
          <p> تماس با ما </p>
        </Link>
      </div>
      <div className="flex justify-center  *:mx-1 my-2 *:text-gray-600 *:cursor-pointer">
        <FiTwitter className="hover:text-[#08a0e9]" size={30} />
        <AiOutlineInstagram
          size={30}
          className="  hover:text-red-700"
        />

        <AiOutlineYoutube size={30} className="hover:text-[#ff0000]" />
        <CiLinkedin size={30} className="hover:text-[#0e76a8]" />
        <TbBrandTelegram size={30} className="hover:text-[#24A1DE]" />
      </div>
      <div className="flex justify-center mt-5 *:mx-2">
        <div>
          <Link href="/">
            <Image
              src={"/images/homePage/footer/logoEnamad.png"}
              alt="emanad logo"
              height={120}
              width={120}
              unoptimized
            ></Image>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src={"/images/homePage/footer/logoSamandehi.png"}
              alt="samandehi logo"
              height={120}
              width={120}
              unoptimized
            ></Image>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src={"/images/homePage/footer/logoEtehadiye.png"}
              alt="etehadiye logo"
              height={120}
              width={120}
              unoptimized
            ></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
