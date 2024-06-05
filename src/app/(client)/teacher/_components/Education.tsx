import { Button } from "@/app/_components/button";
import React from "react";

export const Education = () => {
  return (
    <main className="bg-deserve py-[6rem]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="px-[2rem] py-[2rem] xl:w-[80%] mx-auto text-center">
          <p className=" md:text-[25px] xl:text-[35px]">
            <span className="text-blue-100 ">
              All children deserve access to education wherever they are
            </span>
            . We imagine the Africa where distance or lack of internet access is
            not a barrier to a child&apos;s education
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-8">
            <Button
              className="bg-blue-100 text-white rounded-full px-5 py-3"
              text="About us"
            />
            <Button
              className=" text-black border-blue-100 border-2 px-5 py-3 rounded-full"
              text="Join our School Community"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
