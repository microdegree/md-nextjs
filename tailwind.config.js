const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "regal-red": "rgb(245, 23, 103)",
      },
      textColor: ["responsive", "hover", "focus", "group-hover"],
      height: {
        "h-nav": "89.76vh",
        iframeWeb: "325px",
        iframemob: "255px",
      },
      width: {
        iframeweb: "450px",
        iframemob: "310px",
      },
    },
  },

  variants: {
    extend: {
      borderColor: ["active"],
    },
  },
  plugins: [],
};
