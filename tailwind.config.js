/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-one":
          "linear-gradient(90deg, rgba(244,167,100,1) 0%, rgba(255,222,194,1) 100%, rgba(0,212,255,1) 100%)",
        "gradient-two":
          "linear-gradient(90deg, rgba(173,176,176,1) 0%, rgba(225,225,225,1) 100%, rgba(255,222,194,1) 100%, rgba(225,225,225,1) 100%)",
        "gradient-three":
          "linear-gradient(90deg, rgba(48,163,87,1) 0%, rgba(117,227,154,1) 100%, rgba(255,222,194,1) 100%, rgba(225,225,225,1) 100%)",
      },
    },
  },
  plugins: [],
};
