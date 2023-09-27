/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#e4e4e4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "red-error": "#8b141a",
        "green-success": "#00be74",
        "card-fill": "#16181c",
        "searchbar-fill": "#212327",
        "blue-wash": "rgba(117,190,239,0.2)",
        "twitter-blue": "#1d9bf0",
        "twitter-blue-hover": "#1871ca",
        "twitter-blue-disabled": "rgba(117, 190, 239, 0.20)",
      },
      spacing: {},
      fontFamily: {
        "px-regular": ["Inter"],
      },
      fontSize: {
        base: "1rem",
        "5xl": "1.5rem",
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
