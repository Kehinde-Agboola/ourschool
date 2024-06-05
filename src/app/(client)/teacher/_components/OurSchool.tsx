import React from "react";
import Laptop from "../../../../../public/teacher/laptop.svg";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
export const OurSchool = () => {
  return (
    <main className="gradient py-[3rem] px-8 lg:px-0">
      <section className="flex flex-col-reverse xl:flex-row items-center justify-between">
        <div data-aos="zoom-in" className="text-white">
          <h2 className="text-center font-bold md:text-left pt-4">
            Search OurSchool Library
          </h2>
          <p className="w-full lg:w-[60%] pt-4">
            Get access to a vast library of over 1000 free digital content Gand
            tools useable for teaching offline. Library is arranged by subjects,
            grade levels and content type.
          </p>

          <div className="flex items-center relative">
            <span>
              <IoIosSearch className="text-black block absolute bottom-[10px] left-[25px]" />
            </span>
            <input
              type="text"
              className="w-full md:w-[65%] text-black py-2 px-[3rem] rounded-full mt-5 outline-none "
              placeholder="Search OurSchool Libary"
            />
          </div>
        </div>
        <Image src={Laptop} alt="children" />
      </section>
    </main>
  );
};
