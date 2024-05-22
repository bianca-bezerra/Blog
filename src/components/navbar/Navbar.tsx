import React from "react";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex h-28 items-center justify-between">
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
