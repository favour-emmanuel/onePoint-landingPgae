/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBlack: "#0d0d0d",
        appYellow: "#ffee00",
        appDarkBlue: "#aae6fb",
        appGray: "#727373",
        appfadeGray: "#191919"
      },
      fontFamily: {
        samsunSharp: ["samsung-sharp"],
        overPass: ["overpass"],
      },
    },
  },
  plugins: [],
}

