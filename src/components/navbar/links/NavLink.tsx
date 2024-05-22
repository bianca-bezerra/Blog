"use client";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button/button";

interface NavlinkProps {
  link: {
    title: string;
    url: string;
  };
}

export default function Navlink({ link }: NavlinkProps) {
  const pathName = usePathname();
  return (
    <div>
      <Link href={link.url}>
        <Button
          className={`text-base rounded-md ${
            pathName === link.url ? "bg-white text-current hover:text-white" : "bg-transparent"
          }`}
        >
          {link.title}
        </Button>
      </Link>
    </div>
  );
}
