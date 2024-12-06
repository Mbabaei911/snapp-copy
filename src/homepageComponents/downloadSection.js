import React from "react";
import Link from "next/link";
import Image from "next/image";

function DownloadSection() {
  return (
    <div className="bg-white w-[90%] 2xl:w-[70%] mx-auto h-72 flex items-center justify-between flex-wrap flex-row">
      <Link
        href={"/"}
        className="hover:scale-[98%] transition-all duration-100 ease mx-auto"
      >
        <Image
          src={"/images/homePage/download/myketmarket.png"}
          alt="mymarket download"
          height={60}
          width={160}
        ></Image>
      </Link>
      <Link
        href={"/"}
        className="hover:scale-[98%] transition-all duration-100 ease mx-auto"
      >
        <Image
          src={"/images/homePage/download/direct-download-badge.png"}
          alt="direct download download"
          height={60}
          width={160}
        ></Image>
      </Link>
      <Link
        href={"/"}
        className="hover:scale-[98%] transition-all duration-100 ease mx-auto"
      >
        <Image
          src={"/images/homePage/download/app_store.svg"}
          alt="app store download"
          height={60}
          width={160}
        ></Image>
      </Link>
      <Link
        href={"/"}
        className="hover:scale-[98%] transition-all duration-100 ease mx-auto"
      >
        <Image
          src={"/images/homePage/download/snapp-pwa.png"}
          alt="snapp download"
          height={60}
          width={160}
        ></Image>
      </Link>

      <Link
        href={"/"}
        className="hover:scale-[98%] transition-all duration-100 ease mx-auto"
      >
        <Image
          src={"/images/homePage/download/bazaar.png"}
          alt="bazzar download"
          height={60}
          width={160}
        ></Image>
      </Link>
    </div>
  );
}

export default DownloadSection;
