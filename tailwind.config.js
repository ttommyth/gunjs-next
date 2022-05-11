module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "myDarkTheme",
    themes: [
      {
        myDarkTheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary": "#4134ff",
          "secondary": "#771e9c",
          "accent": "#ff348d",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#0065fe",
          "success": "#34ffa7",
          "warning": "#f2ff34",
          "error": "#ff4134",
        },
      },
      {
        myLightTheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": "#4134ff",
          "secondary": "#771e9c",
          "accent": "#ff348d",
          "info": "#0065fe",
          "success": "#34ffa7",
          "warning": "#f2ff34",
          "error": "#ff4134",
        },
      },
    ],
  },
}
