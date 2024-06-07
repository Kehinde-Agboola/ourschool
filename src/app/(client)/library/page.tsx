import React from "react";
import Nav from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Cards } from "./_components/Cards";
const Library = () => {
  return (
    <main className="bg-blue-100">
      <Nav />
      <Hero />
      <Cards />
    </main>
  );
};

export default Library;
