import React from "react";
import Image from "next/image";
import { images } from "../constants";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const cards = [
  {
    img: images.internet,
    date: "05.03.2022",
    text: "05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы. ",
  },
  {
    img: images.chanel,
    date: "01.02.2022",
    text: "С 1 февраля 2022г меняется «Канал подарков». На кнопке 33 появится новый канал «Plan B».",
  },
  {
    img: images.changes,
    date: "20.01.2022",
    text: "«Осколнэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.",
  },
];
const News = () => {
  return (
    <>
      <section className="mt-[90px]">
        <div className="container">
          <div className="flex justify-center items-center ">
            <h2 className="font-bold text-dark text-[25px] sm:text-[48px] uppercase">Новости</h2>
          </div>
          <div className=" grid sm:grid-cols-3 grid-cols-1 gap-5 ">
            {cards.map((card, i) => (
              <div
                className="bg-white pt-[30px] pb-[25px] px-[30px] rounded-[15px]"
                key={i}
              >
                <Image src={card.img} alt="img" className="rounded-[5px]" />
                <div className="mt-[25px]">
                  <h3 className="font-bold text-dark text-[18px] mb-[15px]">{card.date}</h3>
                  <p className="font-medium text-dark text-[16px] max-w-[320px] w-full mb-[30px] leading-[24px]">{card.text}</p>
                  <Link href={"/"}>
                    <a className="flex items-center text-blue-500">
                      Подробнее
                      <span>
                        <HiArrowNarrowRight className="ml-[3px]" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center sm:mt-[52px] mt-[20px]">
          <button className="sm:h-full bg-fiol text-white py-[11px] px-[65px] sm:mt-0 mt-[15px] rounded-[60px] sm:ml-[20px]">Все новости</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
