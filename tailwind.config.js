/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./server/**/*.{js,html}"],

  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    boxShadow: {
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      upload: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      loginLogo:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
  },

  // corePlugins: {
  //   preflight: false,
  // },
  variants: {
    extend: {
      animation: ["motion-safe"],
      boxShadow: ["active", "hover"],
    },
  },
  //important: true,

  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
