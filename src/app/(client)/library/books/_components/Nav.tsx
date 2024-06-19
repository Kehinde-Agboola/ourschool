import React from "react";
import Image from "next/image";
import Logo from "../../../../../../public/logo2.svg";
export default function Nav() {
  return (
    <main>
      <section>
        <Image src={Logo} alt={Logo} />
      </section>
    </main>
  );
}
