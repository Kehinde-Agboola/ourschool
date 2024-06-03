import React from "react";
import network from "../../../../public/home/children.svg";
import Image from "next/image";
import { Button } from "../../_components/button";
export const Network = () => {
  return (
    <main className="bg-gray py-[3rem] px-8 md:px-0">
      <section className="flex flex-col md:flex-row items-center justify-between">
        <Image src={network} alt="children" />
        <div className=" w-full lg:w-[40%]">
          <h2 className="text-center md:text-left pt-4">
            Enjoy <span className="text-blue-100">learning</span> anywhere
          </h2>
          <p className="text-dark-100 pt-4">
            Our School is one basic school for all. Learn with or without
            internet using any device. Get access to over 1000 video recorded
            lessons. Download projectable teaching resources without Wi-Fi and
            use offline.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 pt-8">
            <Button
              className="bg-blue-100 text-white rounded-full px-5 py-3"
              text="Download for Free"
            />
            <Button
              className=" text-black border-blue-100 border-2 px-5 py-3 rounded-full"
              text="Upgrade your version "
            />
          </div>
        </div>
      </section>
    </main>
  );
};
