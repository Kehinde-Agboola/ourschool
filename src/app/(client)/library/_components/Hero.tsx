import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Word } from "@/app/_constant/data";
export const Hero = () => {
  return (
    <main className="text-white">
      <section className="text-center py-[3rem] px-8 xl:px-0">
        <div>
          <h2>
            Search <span className="text-yellow-100 font-bold">OurSchool</span>{" "}
            Library
          </h2>
          <p className=" w-full md:max-w-[58%] mx-auto pt-5">
            Get access to a vast library of over 1000 free digital content and
            tools useable for teaching offline. Library is arranged by subjects,
            grade levels and content type.
          </p>
        </div>
        <div className="flex items-center relative w-full md:md:w-[50%] mx-auto pt-[1rem]">
          <span>
            <IoIosSearch className="text-black block absolute bottom-[10px] left-[50px] xl:left-[15px]" />
          </span>
          <input
            type="text"
            className=" text-black py-2 px-[3rem] w-full rounded-full mt-5 outline-none "
            placeholder="Search OurSchool Libary"
          />
        </div>
        <div className="cursor-pointer flex flex-wrap gap-[2rem] justify-center items-center py-5">
          {Word.map((letter, index) => {
            return (
              <div
                key={index}
                className="bg-blue-400 p-2  rounded-md flex items-center gap-2"
              >
                <IoIosSearch />
                <p>{letter.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
