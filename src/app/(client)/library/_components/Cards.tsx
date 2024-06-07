"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiBookmark } from "react-icons/ci";
import { Courses } from "../../../_constant/data";
import Image from "next/image";

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

export const Cards = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <main className="max-w-5xl mx-auto px-8 xl:px-0 py-[3rem]">
      <section>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            mousewheel={true}
            keyboard={true}
            spaceBetween={10}
            slidesPerView={6}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {Courses.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image src={d.img} alt={d.category} className="w-full" />
                  <div className="bg-white px-3 text-black absolute bottom-0 pt-3">
                    {d.description}
                    <div className="flex items-center justify-between pt-8">
                      {d.category}
                      <CiBookmark />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className=" hidden  xl:flex items-center justify-around w-full mt-0 mx-auto z-50">
            <div
              ref={(node) => setPrevEl(node)}
              className="bg-white text-blue-100 h-8 w-8 rounded-full lg:flex items-center justify-center cursor-pointer absolute left-10 top-[50%]"
            >
              <MdArrowBack />
            </div>
            <div
              ref={(node) => setNextEl(node)}
              className="h-8 w-8 rounded-full lg:flex items-center justify-center cursor-pointer absolute right-10 top-[50%] bg-white text-blue-100"
            >
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
