import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      {/* TOP */}
      <div className="">
        {/* LEFT */}
        <div className="w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">SrShop</div>
          </Link>
        </div>
        {/* CENTER */}
        <div className="w-1/2"></div>
        {/* RIGHT */}
        <div className="w-1/4"></div>
      </div>
      {/* BOTTOM */}
    </div>
  );
};

export default Footer;
