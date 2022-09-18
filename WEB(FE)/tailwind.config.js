const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fondFamily: {
        sans: ["Inter var", ...defaultTheme.fondFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugin: [require("@tailwindcss/typography")],
};
