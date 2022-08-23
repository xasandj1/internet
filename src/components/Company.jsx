import React from "react";
import Image from "next/image";
import images from "../constants/images";

const Company = () => {
  return (
    <>
      <section className="mt-[52px]">
        <div className="container">
          <div className="bg-white">
            <div className="sm:px-[64px] flex items-center justify-center pt-[40px] sm:pt-0 pb-[20px] sm:pb-0 sm:items-center sm:justify-center ">
              <h2 className="font-bold text-dark sm:text-[48px] text-[25px] uppercase">О компании</h2>
            </div>
            <div className="sm:pl-[100px] sm:mt-[40px] flex items-center sm:flex-row flex-col mt-[20px]">
              <Image
                src={images.oskolnet}
                alt="oskolnet"
                className="rounded-[10px] "
              />
              <div className="sm:ml-[45px] mx-[20px] sm:mt-0 mt-[15px]">
                <p className="font-normal text-[18px] text-dark sm:max-w-[532px] max-w-[320px] w-full ">
                  Сегодня – это крупнейшая компания в Старом Осколе с широким
                  спектром телекоммуникационных услуг: Интернет, телефония, IP
                  телевидение, видеонаблюдение.
                </p>
                <p className="font-normal text-[18px] text-dark max-w-[532px] w-full mt-[20px]">
                  Мы улучшаем качество жизни людей, предоставляя возможность
                  свободного общения в информационном сообществе. Предлагаем
                  самые современные Интернет технологии наивысшего качества.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:mt-[70px] mt-[20px] ">
              <button className="bg-fiol text-white text-bold text-[20px] py-[10px] px-[25px] rounded-[60px] sm:mb-[64px] mb-[20px]">Подробно о компании</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
