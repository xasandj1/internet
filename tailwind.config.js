/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        circe: "var(--font-c)",
        afutur: "var(--font-a)",
        manrope: "var(--font-m)",
      },
      fontSize: {
        sm: ["16px", "20px"],
        base: ["20px", "33px"],
        lg: ["25px", "32px"],
        xl: ["55px", "56px"],
        xxl: ["75px", "94px"],
      },
      fontWeight: {
        light: "var(--font-light)",
        regular: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
        extrabold: "var(--font-extrabold)",
      },
      colors: {
        white: "var(--white)",
        fiol: "var(--fiol)",
        dark: "var(--dark)",
        gray: "var(--gray)",
        darkblue:"var(--darkblue)",
        lightWhite:"var(--lightWhite)",
      },
    },
  },
  plugins: [],
};
