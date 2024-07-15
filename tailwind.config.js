/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        snow: {
          "100": "#fffcfc",
          "200": "#fdfbfb",
        },
        maroon: {
          "100": "#800606",
          "200": "#720a0a",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "2xl-5": "21.5px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1875: {
        raw: "screen and (max-width: 1875px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
