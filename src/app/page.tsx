"use client";
import Nav from "./(client)/Home/Nav";
import { Header } from "./_components/Header";
import { Network } from "./(client)/Home/Network";
import { Learning } from "./(client)/Home/Learning";
import { Community } from "./(client)/Home/Community";
export default function page() {
  return (
    <div>
      <Nav />
      <Header />
      <Network />
      <Learning />
      <Community />
    </div>
  );
}
