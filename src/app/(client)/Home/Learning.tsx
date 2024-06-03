import React from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowUpRight } from "react-icons/lu";
import { Course } from "@/app/_constant/data";
import Image from "next/image";
import { Button } from "@/app/_components/button";
import { useState } from "react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import { MdArrowBack } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
export const Learning = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <main className="bg-learning relative bg-blue-100 bg-cover bg-center bg-no-repeat py-[4rem] px-8 md:px-0 text-white">
      <section>
        <div className="text-center">
          <h2>Have fun learning with videos</h2>
          <p className="md:w-[60%] mx-auto  py-5">
            What we learn with joy, we never forget. Learning is more fun with
            recorded video lessons and animations that cover every subject.
          </p>
        </div>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            mousewheel={true}
            keyboard={true}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              0: { slidesPerView: 1 },

              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {Course.map((d, index) => {
              return (
                <SwiperSlide>
                  <div key={index} className="">
                    <div className="relative">
                      <Image src={d?.img} alt={d?.title} />
                      <p className="absolute text-[12px] py-1 bg-black rounded-md px-3 top-0 right-0 m-5 md:m-3">
                        {d?.category}
                      </p>
                    </div>
                    <p className="text-[1.5rem] py-4">{d?.title}</p>
                    <p className="text-[12px]">{d?.description}</p>
                    <div className="flex items-center pt-4">
                      <Button
                        text="Play Video"
                        className="bg-white text-black rounded-full relative px-10 py-3"
                      />
                      <LuArrowUpRight
                        className="absolute left-[8rem]"
                        color="black"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className=" hidden md:flex items-center justify-center gap-[3rem]  mt-[5rem]">
            <div
              ref={(node) => setPrevEl(node)}
              className="bg-white text-white h-12 w-12 rounded-full lg:flex items-center justify-center cursor-pointer"
            >
              <MdArrowBack color="blue" />
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="h-12 w-12 rounded-full lg:flex items-center justify-center cursor-pointer  bg-white text-white"
            >
              <AiOutlineArrowRight color="blue" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
