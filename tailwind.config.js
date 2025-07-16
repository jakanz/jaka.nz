module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        test: "#00ff00",
        body: "#050505",
        main: "#171717",
      },
      backgroundImage: {
        'header': 'linear-gradient(to right, #e73c7e, #23a6d5)',
        'trans': 'linear-gradient(to right, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA)',
      },
      fontSize: {
        '2xs': '0.67rem',
      }
    },
  },
};
