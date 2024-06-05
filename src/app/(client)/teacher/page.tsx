import React from "react";
import Nav from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { OurSchool } from "./_components/OurSchool";
import { Cards } from "./_components/Cards";
import { Education } from "./_components/Education";
const Teacher = () => {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Cards />
      <OurSchool />
      <Education />
    </main>
  );
};

export default Teacher;
