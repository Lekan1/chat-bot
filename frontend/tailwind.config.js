const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inkMuted:"#EADDFF",
        // App background
        surface: "#FEF7FF",

        // Chat bubbles
        botBubble: "#E5E5EA",
        userBubble: "#3B82F6",

        // Text colors
        ink: "#111827",
        inkMuted: "#6B7280",

        // Brand colors
        primary: "#4F46E5",
        primaryLight: "#6366F1",
        primaryDark: "#3730A3",

        secondary: "#F59E0B",
        secondaryLight: "#FBBF24",
        secondaryDark: "#B45309",

        // Status colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",

        // Neutral palette
        grayLight: "#F3F4F6",
        gray: "#9CA3AF",
        grayDark: "#4B5563",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.08)",
      },
      borderRadius: {
        lgx: "16px",
        mdx: "12px",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      maxWidth: {
        bubble: "75%",
      },
    },
  },
  plugins: [],
};
