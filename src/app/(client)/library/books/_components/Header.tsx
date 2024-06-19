import React from "react";
import Image from "next/image";
import { Heading } from "@/app/_constant/data";
export default function Header() {
  return (
    <div className="bg-header">
      <div className="flex justify-between items-center text-center max-w-5xl mx-auto py-10">
        {Heading.map((l, index) => {
          return (
            <div key={index}>
              <Image src={l.img} alt={l.img} className="block mx-auto" />
              <p>{l.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// export default header;
