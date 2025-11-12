"use client";

import { use, useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";

function SliderProducts() {
  const slides = [
    {
      id: "1",
      url: "https://raw.githubusercontent.com/Asalkjh/picture/main/-2147483648_-210420.jpg",
    },
    {
      id: "2",
      url: "https://raw.githubusercontent.com/Asalkjh/picture/main/-2147483648_-210422.jpg",
    },
    {
      id: "3",
      url: "https://raw.githubusercontent.com/Asalkjh/picture/b218e35debc6d05e9e10bfc90c0d9da54524d7b2/-2147483648_-210428.jpg",
    },
    {
      id: "4",
      url: "https://raw.githubusercontent.com/Asalkjh/picture/main/-2147483648_-210426.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  const prevSlide = () => {
    const isfirstSlide = currentIndex === 0;
    const newIndex = isfirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastOne = currentIndex === slides.length - 1;
    const newIndex = isLastOne ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="pt-5 w-full  flex justify-center flex-col">
        <div className="mx-auto ">
          {" "}
          <h1 id="titleSlider" className="font-bold text-4xl text-shadow-lg ">
            luxury jewelry
          </h1>
        </div>
        <div className="mx-auto mt-6">
          <Link
            className="px-[30px] py-[10px] border rounded-2xl "
            href={"/store"}
          >
            {" "}
            shop now{" "}
          </Link>
        </div>
      </div>
<div className="w-full px-[100px] mx-auto max-md:px-8">
      <div className=" max-w-[1400px]  w-[550px] h-[550px] m-auto pt-[30px] max-sm:w-[300px] max-sm:h-[300px]   relative">
        <Link href={`/store/${currentIndex + 1}`}>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full mx-auto rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </Link>
        </div>
        </div>
    </>
  );
}

export default SliderProducts;
