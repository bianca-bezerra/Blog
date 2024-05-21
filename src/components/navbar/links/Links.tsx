/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@/components/button/button";

const links = [
  {
    title: "Homepage",
    url: "/"
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
  const session = false;
  const isAdmin = true;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <div className="flex gap-10 max-md:hidden">
        {links.map((link) => (
          <NavLink link={link} />
        ))}
        {session ? (
          <div className="flex flex-row gap-3">
            {isAdmin && <NavLink link={{ title: "Admin", url: "/admin" }} />}
            <Button className="text-base bg-white text-blue-950 p-3">
              Logout
            </Button>
          </div>
        ) : (
          <>
            {/* <Button className="text-base bg-transparent shadow-sm shadow-black">
            Login
          </Button>*/}
            <NavLink link={{ title: "Login", url: "/login" }} />
          </>
        )}
      </div>
      <Button className="md:invisible" onClick={() => setOpen((prev) => !prev)}>Menu</Button>
      {isOpen && (
        <div className="flex absolute top-24 right-0 w-1/2 h-[calc(100vh-100px)] flex-col items-center content-center gap-10">
          {links.map((link) => ( 
            <NavLink link={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
