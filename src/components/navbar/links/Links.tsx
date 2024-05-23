/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/button/button";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

const Links = () => {
  const session = true;
  const isAdmin = true;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-row items-center content-center justify-center">
      <div className="flex gap-10 max-md:hidden">
        {links.map((link,index) => (
          <NavLink link={link} key={index} />
        ))}
        {session ? (
          <div className="flex flex-row gap-3">
            {isAdmin && <NavLink link={{ title: "Admin", url: "/admin" }} />}
            <Button className="text-base bg-white text-blue2 p-3 hover:text-white">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <NavLink link={{ title: "Login", url: "/login" }} />
          </>
        )}
      </div>
      <Button
        className="bg-transparent hover:bg-transparent md:hidden p-0"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image
          src="/icons8-cardápio.svg"
          height={30}
          width={30}
          alt="cardapio"
        />
      </Button>
      {isOpen && (
        <div className="flex w-fit absolute top-24 right-0 pr-5 flex-col items-center content-center gap-10 md:hidden">
          {links.map((link) => (
            <NavLink link={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
