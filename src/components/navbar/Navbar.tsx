import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full h-28 bg-purple-blue items-center items justify-between">
      <Image
        className="text-2xl font-bold h-fit"
        src="/src/app/"
        alt="logo"
        width={50}
        height={20}
      />

      <Links />
    </div>
  );
};

export default Navbar;
