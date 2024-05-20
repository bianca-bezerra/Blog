/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Links = () => {
  const links = [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Admin",
      url: "/admin",
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
  return (
    <div className="flex gap-20">
      {links.map((link) => (
        <NavLink item={link}/>
      ))}
    </div>
  );
};

export default Links;
