import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins"],
      },
      colors: {
        gray: "#F3FBFF",
        dark: {
          100: "#777777",
        },
        yellow: {
          100: "#FBC343",
        },
        blue: {
          100: "#0964D7",
        },
        header: "#F3FBFF",
        lightgray: "F3FBFF",
        gradient:
          " linear-gradient(to right bottom,rgba(39, 127, 238, 1),rgba(35, 119, 226, 1) rgba(9, 100, 215, 1)",
      },
      backgroundImage: {
        hero: "url('../../public/hero.svg')",
        deserve: "url('../../public/teacher/deserve.svg')",
        learning: "url('../../public/learningbg.svg')",
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#277FEE',0.8), rgba('#2377E2',0.8), ('#0964D7', 0.8)), url('../../public/learningbg.svg')",
        teacher: "url('../../public/teacher/teacher.svg')",
        footer: "url('../../public/footer.png')",
        "footer-pattern":
          "linear-gradient(to right bottom, rgba('#277FEE',0.8), rgba('#2377E2',0.8), ('#0964D7', 0.8)), url('../../public/footer.png')",
      },
    },
  },
  plugins: [],
};
export default config;
