"use client";

import Link from "next/link";
import Container from "./Container";
import pic from "../../public/assets/icons/hamburger.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();

 const navs = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Store",
      path: "/store",
    },
    {
      title: "Cart",
      path: "/cart",
    },
  ];

  return (
    <>
      <div className="  flex w-full max-md:w-full h-14 border-b flex-row-reverse items-center justify-between ">
        <div className="px-14">
          <h1 id="nameShop" className="font-bold text-2xl max-md:mx-auto ">Luvira</h1>
        </div>
        <div className="max-md:hidden">
          {navs.map((item) => (
            <Link
              className={`mr-4 ${
                pathname === item.path ? "text-sky-700 " : ""
              }`}
              key={item.path}
              href={item.path}
            >
              {" "}
              {item.title}{" "}
            </Link>
          ))}
        </div>
        <div className="max-md:hidden pl-14">
          <Link className="border px-2.5 py-1 rounded" href={"/login"}>
            {" "}
            Login{" "}
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
