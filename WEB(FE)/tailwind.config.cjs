/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            orange: '#F07644',
            black: '#262626',
            white: {
                100: '#F5F5F5',
                200: '#F2F2F2',
            },
            gray: {
                300: '#D9D9D9',
                400: '#AAAAAA',
                500: '#777777',
            },
            blue: '#0066FF',
        },
        extend: {},
    },
    plugins: [],
=======
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#F07644",
      black: "#262626",
      white: {
        100: "#F5F5F5",
        200: "#F2F2F2",
      },
      gray: {
        300: "#D9D9D9",
        400: "#AAAAAA",
        500: "#777777",
      },
      blue: '#0066FF',
      green : "#5EC14E",
      
    },

    extend: {
      width: {
        '420' : '420px',
      },
      padding: {
        '515' : '515px',
      },
    },
  },
  plugins: [],
>>>>>>> 210f8f4 (Feat : 카테고리 컴포넌트, 선호하는 밀리루틴 컴포넌트 제작 및 auth/signup/more 페이지 90% 완성)
};
