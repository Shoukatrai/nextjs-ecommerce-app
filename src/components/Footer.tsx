import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex justify-between gap-24 ">
        {/* LEFT */}
        <div className="w-1/4 flex flex-col gap-8 ">
          <Link href="/">
            <div className="text-2xl tracking-wide">SrShop</div>
          </Link>
          <p>
            3252 Winding way , central plaza , Willowbrook , CA 90210 , United
            States
          </p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2"></div>
        {/* RIGHT */}
        <div className="w-1/4"></div>
      </div>
      {/* BOTTOM */}
    </div>
  );
};

export default Footer;
