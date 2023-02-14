// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      maxWidth: {
        '400': '400px',
      },
      minHeight: {
        '180': '180px',
      },
      minWidth: {
        '400': '400px',
      },
      extend: {
        // colors: {
        //   primary:"red",
        // },
        // spacing: {
        //   minh:"180px",
        //   minw:"400px",
        //   maxw:"400px",
        //   sm: "0.5rem",
        //   md: '1rem',
        //   lg: '1.5rem',
        //   xl: '2rem',
        // },
      },
    },
    variants: {},
    plugins: [],
  }