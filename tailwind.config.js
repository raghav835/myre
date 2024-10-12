/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#2EF2FF",  // Keeping one vibrant color for contrast
        p2: "#000000",  // Black
        p3: "#1B1B1B",  // Dark grey shade for softer blacks
        p4: "#2D2D2D",  // Dark grey shade for more contrast
        p5: "#1A1A1A",  // Another dark tone for variation
        s1: "#080808",  // Very dark shade for backgrounds
        s2: "#0F0F0F",  // Slightly lighter black
        s3: "#121212",  // Darker grey for subtle distinction
        s4: "#000000",  // Pure black
        s5: "#1C1C1C",  // Dark grey for button hover or elements
        black: {
          DEFAULT: "#000000",  // Pure black
          100: "#0A0A0A",      // Light black for background layering
        },
      },
      boxShadow: {
        100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #000000",  // Black shadows
        200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #000000", // Black shadows
        300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #000000", // Black shadows
        400: "inset 0px 2px 4px 0 rgba(0, 0, 0, 0.5)",  // Blacker shadows for inset elements
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(0, 0, 0, 0.7)", // Black heavy shadow
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],  // Retaining the fonts
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        borderColor: "border-color",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "3/20": "15%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "15/20": "75%",
        "17/20": "85%",
        "19/20": "95%",
        22: "88px",
        100: "100px",
        512: "512px",
        330: "330px",
        388: "388px",
        400: "400px",
        440: "440px",
        640: "640px",
        960: "960px",
        1230: "1230px",
      },
      zIndex: {
        1: "1",
        2: "2",
        4: "4",
      },
      lineHeight: {
        12: "48px",
      },
      borderRadius: {
        14: "14px",
        20: "20px",
        40: "40px",
        half: "50%",
        "7xl": "40px",
      },
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
    },
  },
  plugins: [],
};
