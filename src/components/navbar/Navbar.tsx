import React from "react";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex h-28 items-center justify-between shadow-sm shadow-black pr-10 pl-10 pb-2">
      <Image
        className="text-2xl font-bold h-fit"
        src="/logo.svg"
        alt="logo"
        width={50}
        height={20}
      />
      <Links />
    </div>
  );
};

export default Navbar;
