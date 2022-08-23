import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { images } from "../constants";
import { BiCopy } from "react-icons/bi";

const links = [
  { name: "Интернет", active: true, xit: false },
  { name: "Интернет + Кабельное ТВ", active: false, xit: true },
  { name: "Интернет + Smart TV", active: false, xit: false },
  { name: "Интернет + Телефония", active: false, xit: false },
];

const sliders = [
  { title: "Medium", speed: "30 Мбит/с", price: 300, xit: false },
  { title: "Total", speed: "60 Мбит/с", price: 450, xit: false },
  { title: "Energy", speed: "100 Мбит/с", price: 600, xit: true },
  { title: "Ultra", speed: "200 Мбит/с", price: 900, xit: false },
  { title: "Rush", speed: "300 Мбит/с", price: 1100, xit: false },
  { title: "Rush", speed: "300 Мбит/с", price: 1100, xit: false },
];

const Trafick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
    <section className="my-[50px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-dark sm:text-[48px] text-[25px] leading-[130%] uppercase font-bold uppercase">
              тарифы для дома
            </h2>
          </div>
          <div className="flex flex-col bg-white rounded-2xl p-5 sm:pt-[50px] sm:pb-6 sm:px-[40px]">
            <div className="flex items-center justify-center">
              <ul className="flex flex-wrap sm:m-[0] ml-[25px]">
                {links.map((link, i) => (
                  <li key={i} className=" sm:mx-[40px] ">
                    <a
                      className={
                        link.active
                          ? `font-regular text-[14px] mr-[20px] sm:text-[20px] leading-[140%] text-dark border-b border-dark pb-1`
                          : `font-regular text-[14px] mr-[20px] sm:text-[20px] leading-[140%] text-dark pb-1`
                      }
                    >
                      {link.name}{" "}
                      {link.xit && (
                        <span className="bg-fiol px-1 py-[2px] rounded-full text-[12px] font-bold text-white">
                          ХИТ
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[50px]">
              <Slider {...settings}>
                {sliders.map((slider, i) => (
                  <div
                    className={`px-5 pt-[25px] pb-[35px] sm:border-none border rounded-[30px] ${
                      slider.xit && "bg-dark"
                    }`}
                    key={i}
                  >
                    <div className="flex flex-col">
                      <span>xit</span>
                      <h3
                        className={`text-dark font-bold text-[30px] leading-[44px] ${
                          slider.xit && "text-white"
                        }`}
                      >
                        {slider.title}
                      </h3>
                      <div className="flex items-center justify-start mb-4">
                        <div className="flex items-center justify-center mr-4">
                          <Image src={images.speed} alt="icon" />
                        </div>
                        <p
                          className={`font-bold text-[24px] leading-[35px] text-dark ${
                            slider.xit && "text-white"
                          }`}
                        >
                          {slider.price} <span className="">мбит/с</span>
                        </p>
                      </div>
                      <div
                        className={`flex items-center justify-start pb-[15px] border-b-[2px] ${
                          slider.xit ? "border-fiol" : "border-lightWhite"
                        }`}
                      >
                        <p
                          className={`font-regular text-[18px] leading-[140%] text-dark ${
                            slider.xit && "text-white"
                          }`}
                        >
                          Подробнее
                        </p>
                        <div className="flex items-center justify-center ml-1">
                          <BiCopy
                            color={slider.xit ? "white" : "text-dark"}
                            fontSize={20}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`font-bold text-[30px] leading-[44px] text-dark mr-1 ${
                            slider.xit && "text-white"
                          }`}
                        >
                          {slider.price}
                        </span>
                        <p
                          className={`text-dark font-bold leading-[140%] ${
                            slider.xit && "text-white"
                          }`}
                        >
                          ₽/мес
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex align-center justify-center">
              <button className="mt-[50px] bg-fiol text-white font-bold text-[16px] py-[10px] px-[70px] sm:px-[85px] rounded-[60px]">Все тарифы</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trafick;
