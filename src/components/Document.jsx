import Link from "next/link";
import React from "react";
import { images } from "../constants";
import Image from "next/image";

const cards = [
  {
    img: images.document,
    txt: "Договор оферты на оказание услуг связи (Интернет)",
  },
  {
    img: images.document,
    txt: "Договор оферты на оказание услуг связи (Цифровое Телевидение)",
  },
  { img: images.document, txt: "Лицензия 1" },
];
const Document = () => {
  return (
    <>
      <section className="bg-white mt-[80px]">
        <div className="container">
          <div className="">
            <div className="flex flex-col">
              <div className="flex items-center justify-center pb-[15px] pt-[40px] sm:pt-[50px] sm:pb-[40px] ">
                <h1 className="font-bold text-dark sm:text-[48px] text-[25px] uppercase">
                  Документы
                </h1>
              </div>
              <div className="bg-gray grid grid-cols-1 sm:grid-cols-3 rounded-[15px]">
                {cards.map((card, i) => (
                  <div
                    className="flex items-center sm:px-[40px] px-[20px] py-[20px] sm:py-[50px]"
                    key={i}
                  >
                    <Link href={"/"}>
                      <a className="bg-white p-[15px] rounded-[60px] flex mr-[17px]">
                        <Image src={images.document} alt="vector" />
                      </a>
                    </Link>
                    <p className="max-w-[220px] sm:max-w-[280px] w-full text-dark font-regular text-[17px]">
                      {card.txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px] pb-[63px]">
              <button className=" sm:h-full bg-fiol text-white  py-[11px] px-[65px]  rounded-[60px] sm:ml-[20px]">
                Все документы
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Document;
