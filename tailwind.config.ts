import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 18, 32, 0.08)",
        card: "0 14px 40px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at top, rgba(201, 159, 59, 0.22), transparent 48%)",
        "institutional-grid":
          "linear-gradient(rgba(9, 30, 66, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 30, 66, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
