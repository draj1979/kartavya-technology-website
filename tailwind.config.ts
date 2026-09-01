import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3b82f6",
          dim: "#2563eb",
          light: "#60a5fa",
        },
        bg: {
          primary: "#0a0a0a",
          secondary: "#0f172a",
          card: "#111827",
        },
        border: {
          DEFAULT: "#1f2937",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        DEFAULT: "10px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
