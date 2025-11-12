"use client";

import Link from "next/link";
import image from "next/image";
import Image from "next/image";

function Sidebar() {
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
    {
      
      title: "Login",
      path: "/login",
    
    }
  
  ];

  const handleSidebar = () => {
    let button = document.getElementById("sidebar");
    if (button) {
      if (button.style.left == "-200px") {
        button.style.left = "0";
      } else {
        button.style.left = "-200px";
      }
    }
  };

  return (
    <div className="relative md:hidden z-40  ">
      <div
        id="sidebar"
        className="fixed  top-0 left-[-200px] bg-gray-300 rounded-r-2xl h-full w-[200px] duration-500 "
      >
     
        {navs.map((item) => (
          <Link key={item.path} href={item.path}>
            <div className="px-5 py-5 border-b-2 ">{item.title}</div>
          </Link>
        ))}
        <div>
          <div
            onClick={handleSidebar}
            id="hamMenu"
            className=" w-[60px] absolute top-[1%] left-[102%]  "
          >
            <Image
              src="/assets/icons/hamburger.png"
              width={30}
              height={30}
              alt="hamburger menu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
