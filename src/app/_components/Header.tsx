import React from "react";
import { Button } from "./button";
import bag from "../../../public/home/bag.svg";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="relative bg-hero pt-[9rem] bg-cover bg-no-repeat bg-blue-100">
      <div className="flex flex-col justify-center items-center">
        <div className="pb-[4rem] flex flex-col items-center justify-center">
          <h1 className="text-white">
            Welcome to <span className="text-yellow-100">OurSchool!</span>
          </h1>
          <Button
            text="Let’s Get Learning"
            className="mt-8 py-3 px-6 bg-yellow-100 rounded-full"
          />
        </div>
        <Image className="mx-auto block flex-end" src={bag} alt="bag" />
      </div>
    </div>
  );
};
