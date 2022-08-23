import React from "react";
import Head from "next/head";
import images from "../constants/images";
import Image from "next/image";

import Slider from "react-slick";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="bg-darkblue ">
        <div className="container ">
          <div className="py-[45px]">
            <div className="bg-white sm:flex sm:justify-between  sm:items-center  rounded-3xl h-[476px]">
              <div className="flex flex-col pl-[10px] pt-[60px] sm:pl-[50px] sm:text-start text-center">
                <h1 className="font-bold text-[25px] sm:text-[40px] sm:text-6xl text-dark">
                  ИНТЕРНЕТ
                </h1>
                <p className="font-normal text-[20px] sm:text-5xl text-dark">
                  на высокой скорости
                </p>
                <div className="mt-[30px]">
                  <button className="bg-fiol text-white text-bold text-[20px] py-[10px] px-[25px] rounded-[30px]">
                    Выбрать тариф
                  </button>
                </div>
              </div>
              <div className="pl-[20px] pr-[30px]">
                <Image src={images.info} alt="info" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
