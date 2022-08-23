import Link from "next/link";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { FiPhoneCall , FiFacebook , FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { GoChevronLeft ,GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
   <footer className="bg-dark py-[60px]">
      <div className="container">
        <div className="grid grid-cols-1   sm:grid-cols-4 ">
          <div className="flex justify-center items-center">
              <ul className="text-center sm:text-start">
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">О компании</a></li>
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Новости</a></li>
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Документы</a></li>
              </ul>
          </div>
          <div className="flex justify-center items-center">
              <ul className="text-center sm:text-start">
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Тарифы для дома</a></li>
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Тарифы для бизнеса</a></li>
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Контакты</a></li>
              </ul>
          </div>
          <div className="flex justify-center items-center">
              <ul className="text-center sm:text-start">
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Тест скорости</a></li>
                <li className="mb-[10px] sm:mt-0"><a href="" className="text-white font-regular text-[14px] sm:text-[20px]">Карта покрытия</a></li>
              </ul>
          </div>
          <div className="">
              <div className="flex items-center flex-col sm:flex-row mt-[20px] sm:mt-0">
                <button className="bg-fiol text-white  max-w-[320px] sm:max-w-[205px] w-full h-[40px] rounded-[60px]">Личный кабинет</button>
                <button className="bg-white sm:bg-fiol text-dark sm:text-white  max-w-[320px] sm:max-w-[205px] w-full h-[40px] rounded-[60px] sm:ml-[20px] sm:mt-0 mt-[15px]">Оплатить</button>
              </div>
              <div className="flex items-center mt-[24px]">
                  <BsPhone fontSize={20} color='white' />
                  <Link href={"/"}>
                   <a className="text-white text-[16px] sm:text-[18px] font-regular ml-[5px] sm:ml-[10px]">+7 (4725) 43-97-20</a>
                  </Link>
                  <Link href={"/"}>
                   <a className="ml-[10px] sm:ml-[15px] font-regular text-white text-[14px] sm:text-[16px] opacity-50">Круглосуточно</a>
                  </Link>
                </div>
                <div className="flex items-center mt-[15px] justify-center sm:justify-start">
                    <Link href={'/'}>
                      <a className="text-white text-[20px]"><FiPhoneCall/></a>
                    </Link>
                    <Link href={'/'}>
                      <a className="text-white text-[20px] ml-[15px]"><FiFacebook/></a>
                    </Link>
                    <Link href={'/'}>
                      <a className="text-white text-[20px] ml-[15px]"><FiPhone/></a>
                    </Link>
                    <Link href={'/'}>
                      <a className="text-white text-[20px] ml-[15px]"><FaTelegramPlane/></a>
                    </Link>
                </div>
          </div>
        </div>
      </div>
   </footer>
  );
};

export default Footer;
