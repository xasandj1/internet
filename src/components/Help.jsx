import React from "react";
import { FiMapPin } from "react-icons/fi";

const Help = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="bg-dark rounded-[15px]">
            <div className="sm:pt-[30px] sm:pl-[80px] sm:pr-[60px] sm:pb-[25px] pt-[25px] pb-[20px]">
              <h2 className="font-bold sm:text-[40px] text-[20px] text-white sm:text-start text-center ">
                Трудно выбрать? Мы поможем!
              </h2>
            </div>
            <div className="sm:pl-[80px] sm:pb-[20px] px-[20px]">
              <input
                type="text"
                placeholder="+7 (___) ___-__-__ *"
                aria-label=""
                className="sm:max-w-[390px] w-full py-[10px] pl-[25px] mb-[20px]  placeholder:text-dark font-normal text-[18px] rounded-[5px] focus:outline-dashed text-dark"
              />
              <input
                type="text"
                placeholder="Как Вас зовут? *"
                aria-label=""
                className="max-w-[390px] w-full py-[10px] pl-[25px] sm:ml-[20px] placeholder:text-dark font-normal text-[18px] rounded-[5px] focus:outline-dashed text-dark"
              />
              <button className="bg-fiol text-white py-[11px] px-[65px] sm:mt-0 mt-[15px] rounded-[60px] sm:ml-[20px]">
                Жду звонка
              </button>
            </div>
            <div className="flex align-center pb-[20px] sm:ml-[78px] ml-[20px] sm:mt-0 mt-[10px]">
              <input type="checkbox" name="checkbox" id="#!" className=" " />
              <p className="ml-[15px] font-normal text-[14px] text-white">
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[15px] mt-[20px] relative">
            <div className="sm:pt-[30px] sm:pl-[80px] sm:pr-[60px] sm:pb-[25px] pt-[25px] pb-[20px]">
              <h2 className="font-bold sm:text-[40px] text-[20px] px-[20px] text-white sm:text-start text-center ">
                Проверить возможность подключения по вашему адресу
              </h2>
            </div>
            <div className="sm:pl-[80px] sm:pb-[20px] px-[20px] sm:flex ">
              <FiMapPin
                fontSize={40}
                className="sm:mr-[30px] sm:relative absolute sm:text-white text-dark top-[36%] hidden"
              />
              <input
                type="text"
                placeholder="Улица"
                aria-label=""
                className="sm:h-full sm:max-w-[520px] w-full py-[10px] pl-[40px] sm:pl-[25px] mb-[20px]  placeholder:text-dark font-normal text-[18px] rounded-[5px] focus:outline-dashed text-dark"
              />
              <input
                type="text"
                placeholder="Как Вас зовут? *"
                aria-label=""
                className="sm:h-full sm:max-w-[185px] sm:w-full min-w-[250px] w-full py-[10px] pl-[25px] sm:ml-[20px] placeholder:text-dark font-normal text-[18px] rounded-[5px] focus:outline-dashed text-dark"
              />
              <button className="sm:h-full bg-fiol text-white py-[11px] px-[65px] sm:mt-0 mt-[15px] rounded-[60px] sm:ml-[20px]">
                Жду звонка
              </button>
            </div>
            <div className="flex align-center pb-[20px] sm:ml-[78px] ml-[20px] sm:mt-0 mt-[10px]">
              <input type="checkbox" name="checkbox" id="#!" className=" " />
              <p className="ml-[15px] font-normal text-[14px] text-white">
                Нажимая на кнопку, я даю согласие на обработку персональных
                данных
              </p>
            </div>
          </div>
          <div className="bg-dark rounded-[15px] mt-[20px] relative">
            <div className="sm:pt-[30px] sm:pl-[80px] sm:pr-[60px] sm:pb-[25px] pt-[25px] pb-[20px] sm:flex sm:justify-between sm:align-center">
              <h2 className="font-bold sm:text-[40px] text-[20px] text-white sm:text-start text-center ">
              Проверить скорость интернета
              </h2>
              <button className="bg-fiol text-white py-[11px] px-[65px] sm:mt-0 mt-[15px] rounded-[60px] sm:ml-[20px] ml-[40px]">
              Жду звонка
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
