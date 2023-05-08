import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // When you Define Outside the extend it's means overwrite default utility class

  theme: {
    // screens: {
    //   tablet: "960px",
    //   desktop: "1248px",
    // },

    // boxShadow: {
    //   sm: "0px 2px 4px 0px rgba(11,10,55,0.15)",
    // },
    // fontSize: {
    //   xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
    // },
    // fontFamily: {
    //   inter: "Inter, sans-serif",
    //   roboto: "Roboto, sans-serif",
    // },
    extend: { colors: {}, backgroundImage: {}, fontSize: {} },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
