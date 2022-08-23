import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { images } from "../constants";

const SampleNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-[40%] left-[-5%]"
    >
      <span>
        <FiChevronLeft fontSize={40} color='#6984F0'/>
      </span>
    </button>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-[40%] right-[-5%] "
    >
      <span>
        <FiChevronRight fontSize={40} color='#6984F0' className="relative z-[5]"/>
      </span>
    </button>
  );
};

const Partner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="mt-[67px] mb-[78px]">
        <div className="container">
          <div className="">
            <div className="flex justify-center items-center">
              <h4 className="uppercase font-bold text-dark text-[25px] sm:text-[48px]">
                партнеры
              </h4>
            </div>
            <div className="mt-[40px]">
              <Slider {...settings} className=''>
                <div className="bg-white rounded-[15px] max-w-[245px] w-full h-[100px]  py-[25px] px-[30px] ml-[20px] ">
                  <div className="flex items-center justify-center">
                    <Image
                      src={images.see}
                      alt="see"
                      className=""
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[15px] max-w-[245px] w-full h-[100px]  py-[25px] px-[30px] ml-[20px]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={images.bank}
                      alt="see"
                      className=""
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[15px] max-w-[245px] w-full h-[100px]  py-[25px] px-[30px] ml-[20px]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={images.onlife}
                      alt="see"
                      className=""
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[15px] max-w-[245px] w-full h-[100px]  py-[25px] px-[30px] ml-[20px]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={images.playroom}
                      alt="see"
                      className=""
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
