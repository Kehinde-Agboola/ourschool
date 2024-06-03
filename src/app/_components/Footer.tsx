import React from "react";
import footer from "../../../public/logo.svg";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { Company, socials } from "../_constant/data";
import { Service } from "../_constant/data";
import Link from "next/link";

export const Footer = () => {
  return (
    <main className="bg-footer bg-cover bg-center bg-no-repeat bg-blue-100 text-white py-[5rem] px-8 md:px-0">
      <section className="flex flex-col md:flex-row justify-center">
        <div className="pt-8 md:pt-0">
          <Image src={footer} alt="footer-background-image" />
          <p className="py-5 w-full md:w-[80%]">
            OurSchool is a free digital school provided under a collaboration
            between the Destiny Trust,
          </p>
          <div className="flex items-center gap-3">
            <BsTelephone color="white" />
            <p>+234 813 800 2859</p>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-1 gap-3">
          <div className="pt-8 md:pt-0">
            <p className="text-2xl md:pt-14 lg:pt-0 py-3 font-bold">Service</p>
            <div>
              {Service?.map((link, index) => {
                return (
                  <li key={index} className="font-[400] text-[15px] py-3">
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <p className="text-2xl md:pt-14 lg:pt-0 py-3 font-bold">Company</p>
            <div>
              {Company?.map((link, index) => {
                return (
                  <li key={index} className="font-[400] text-[15px] py-3">
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <p className="text-2xl md:pt-14 lg:pt-0 py-3 font-bold">Contact</p>
            <div>
              <p className="py-5 font-[400] text-[15px]">
                Hello@ourschool.africa.com
              </p>
              <p className="font-[400] text-[15px]">
                22, Dr.Ebhomenye Street, Lekki Peninsula 1, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <p className="text-2xl md:pt-14 lg:pt-0 py-3 font-bold">
              Follow Us on
            </p>
            <div className="flex items-center justify-start gap-5">
              {socials?.map((social, index) => (
                <a href="#" key={index} className="py-5">
                  <social.icon size={social.size} color={social.color} />
                </a>
              ))}
            </div>

            <p className="text-sm pt-4 pb-10">&copy; 2023 OurSchool.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
