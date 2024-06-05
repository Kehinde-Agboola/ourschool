import React from "react";
import Lady from "../../../../../public/teacher/lady.svg";
import Image from "next/image";
import { Button } from "../../../_components/button";
export const Hero = () => {
  return (
    <main className="bg-teacher py-[1rem] px-8 lg:px-0">
      <section className="flex flex-col-reverse xl:flex-row items-center justify-between">
        <div data-aos="zoom-in" className=" ">
          <h1 className="text-center md:text-left pt-4">
            Working as a <span className="text-blue-100">teacher</span> just got
            easier
          </h1>
          <p className="text-dark-100 w-full lg:w-[80%] pt-4">
            Get unlimited access to educational content for assisting children
            offline. Track student progress with ease
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 pt-8">
            <Button
              className="bg-blue-100 text-white rounded-full px-5 py-3"
              text="Sign up for free"
            />
            <Button
              className=" text-black border-blue-100 border-2 px-5 py-3 rounded-full"
              text="Search OurSchool library"
            />
          </div>
        </div>
        <Image src={Lady} alt="children" />
      </section>
    </main>
  );
};
