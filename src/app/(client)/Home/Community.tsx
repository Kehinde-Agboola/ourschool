import React from "react";
import globe from "../../../../public/home/globe.svg";
import Image from "next/image";
import { Button } from "../../_components/button";
export const Community = () => {
  return (
    <main className="py-[3rem] px-8 md:px-0">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className=" ">
          <h2 className="text-blue-100 text-center md:text-left">
            Join OurSchool Community
          </h2>
          <p className="text-dark-100 w-full lg:w-[80%] pt-4">
            Be a champion! Join the amazing teachers, educators, NGOs,
            volunteers and public bodies supporting the revolution against child
            illiteracy. Partner with us to take education content offline to
            children who have limited access to the internet. Give more children
            access to education.
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center gap-5 pt-8">
            <Button
              className="bg-blue-100 text-white rounded-full px-5 py-3"
              text="Join OurSchool community"
            />
            <Button
              className=" text-black border-blue-100 border-2 px-5 py-3 rounded-full"
              text="Gift a device"
            />
          </div>
        </div>
        <Image src={globe} alt="children" data-aos="zoom-in" />
      </section>
    </main>
  );
};
