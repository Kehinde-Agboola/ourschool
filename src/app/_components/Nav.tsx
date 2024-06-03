"use client";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { navItem } from "../_constant/data";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [nav, setNav] = useState(false);
  let pathname = usePathname();

  return (
    <div className="absolute top-7 left-0 right-0 z-20">
      <div className=" flex  justify-between items-center  max-w-6xl mx-auto px-8 md:px-0">
        <div className="flex  flex-col md:flex-row  items-center xl:justify-center gap-[3rem]">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
          <nav className="hidden xl:block">
            {navItem.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  key={index}
                  className={`px-4 py-2  text-sm lg:text-base relative no-underline duration-100 ease-in capitalize ${
                    isActive
                      ? "text-white border-b-2"
                      : "text-white hover:border-b-2"
                  }`}
                  href={item.path}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className=" items-center  gap-[1.5rem] hidden xl:flex ">
          <div className="text-white flex items-center cursor-pointer">
            <p>EN</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <Link
              href={"/auth/register"}
              className="bg-white py-3 px-5 rounded-full"
            >
              Start Learning
            </Link>
            <Link
              href={"/auth/Login"}
              className="text-white py-3 px-5 border-2 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 xl:hidden"
        >
          {nav ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </div>
      </div>
      {nav && (
        <nav className="flex flex-col items-center justify-center gap-8 lg:hidden  w-full  transition-all ease-in-out duration-500  absolute h-screen overflow-y-hidden text-2xl bg-blue-100">
          {navItem.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={index}
                className={`px-4 py-2 rounded-md  lg:text-base relative no-underline duration-300 ease-in capitalize ${
                  isActive
                    ? "text-white border-b-2"
                    : "text-white hover:border-b-2"
                }`}
                href={item.path}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="flex flex-col-reverse md:flex-row items-center md:w-none gap-[1.5rem]">
            <Link
              href={"/auth/register"}
              className="bg-white py-3 px-5 rounded-full w-full"
            >
              Start Learning
            </Link>
            <Link
              href={"/auth/Login"}
              className="text-white text-center py-3 px-5 border-2 rounded-full w-full md:w-none"
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
