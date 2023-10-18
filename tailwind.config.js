const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--orbitron-font)", ...fontFamily.sans],
        secondary: ["var(--rajdhani-font)", ...fontFamily.sans],
        tertiary: ["var(--aldrich-font)", "ui-serif", "Georgia"],
      },
      colors: {
        primary: "#0a0a0a",
        accent: "#CA2422",
      },
      backgroundImage: {
        site: "url('/img/site-bg.jpg')",
        about: "url('/img/about.png')",
        services: "url('/img/service.png')",
      },
    },
  },
  plugins: [],
};
