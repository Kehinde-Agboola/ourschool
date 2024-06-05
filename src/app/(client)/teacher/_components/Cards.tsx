import React from "react";
import { Card } from "@/app/_constant/data";
import Image from "next/image";
export const Cards = () => {
  return (
    <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[4rem] py-[6rem] text-center px-6 lg:px-0">
      {Card.map((item, index) => {
        return (
          <div key={index} className="py-4 md:py-4">
            <Image src={item.img} alt={item.title} className="block mx-auto" />
            <p className="py-6 text-[20px] font-bold font-popins md:px-6 px-6">
              {item.title}
            </p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </main>
  );
};
