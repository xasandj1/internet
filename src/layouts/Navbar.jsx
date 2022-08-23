import Image from "next/image";
import React, { useState } from "react";
import images from "../constants/images";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="">
      <nav className="">
        <div className="container">
          <div className="flex items-center py-6 justify-between">
            <Link href="/">
              <a className="max-w-[95px] sm:max-w-[158px] w-full">
                <Image src={images.logo} alt="logo" />
              </a>
            </Link>
            <div className="sm:hidden flex items-center ">
            <BsPhone fontSize={20} color="var(--dark)" className="mx-2" />
              <div className="flex items-center flex-col sm:overflow-hidden">
                <a
                  href="tel:+7 (4725) 43-97-20"
                  className="font-bold text-basem text-dark text-[14px] sm:text-[17px]"
                >
                  +7 (4725) 43-97-20
                </a>
                <a href="#!" className="font-normal text-sm text-dark">
                  круглосуточно
                </a>
              </div>
            </div>
            <ul className="md:flex items-center hidden">
              <li className="text-dark font-normal text-base">
                <a href="" className="mx-4">
                  Тарифы для дома
                </a>
              </li>
              <li className="text-dark font-normal text-base">
                <a href="" className="mx-4">
                  Тарифы для бизнеса
                </a>
              </li>
              <li className="text-dark font-normal text-base">
                <a href="" className="mx-4">
                  Контакты
                </a>
              </li>
              <BsPhone fontSize={20} color="var(--dark)" className="mx-2" />
              <div className="flex items-center flex-col">
                <a
                  href="tel:+7 (4725) 43-97-20"
                  className="font-bold text-basem text-dark"
                >
                  +7 (4725) 43-97-20
                </a>
                <a href="#!" className="font-normal text-sm text-dark">
                  круглосуточно
                </a>
              </div>
              <div className="flex">
                <button className="mx-4 bg-fiol font-regular text-[15px] leading-[22px] text-white px-5 py-1 rounded-3xl">
                  Личный кабинет
                </button>
                <button className="mx-4 bg-dark font-regular text-[15px] leading-[22px] text-white px-8 py-1 rounded-3xl">
                  Оплатить
                </button>
              </div>
            </ul>
            <div className="smallscreen md:hidden flex items-center justify-center">
              <button
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-center bg-fiol py-[10px] px-[10px] rounded-[30px]"
              >
                <AiOutlineMenu fontSize={30} className="text-white" />
              </button>
              {active && (
                <div className="fixed top-0 left-0 w-full h-full backdrop-blur-lg z-[100] flex items-center justify-center">
                  <button
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-center absolute top-5 right-5"
                  >
                    <IoMdClose fontSize={50} className="text-dark" />
                  </button>
                  <ul className="flex items-center flex-col mb[] sm:mb-0">
                    <li className="text-dark font-normal text-base">
                      <a href="" className="mx-4">
                        Тарифы для дома
                      </a>
                    </li>
                    <li className="text-dark font-normal text-base">
                      <a href="" className="mx-4">
                        Тарифы для бизнеса
                      </a>
                    </li>
                    <li className="text-dark font-normal text-base">
                      <a href="" className="mx-4">
                        Контакты
                      </a>
                    </li>
                    <BsPhone
                      fontSize={20}
                      color="var(--dark)"
                      className="mx-2"
                    />
                    <div className="flex items-center flex-col">
                      <a
                        href="tel:+7 (4725) 43-97-20"
                        className="font-bold text-basem text-dark"
                      >
                        +7 (4725) 43-97-20
                      </a>
                      <a href="#!" className="font-normal text-sm text-dark">
                        круглосуточно
                      </a>
                    </div>
                    <div className="flex">
                      <button className="mx-4 bg-fiol text-white px-5 py-1 rounded-3xl">
                        Личный кабинет
                      </button>
                      <button className="mx-4 bg-dark text-white px-8 py-1 rounded-3xl">
                        Оплатить
                      </button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
