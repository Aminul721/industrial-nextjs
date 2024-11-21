/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        // sm: '2rem',
        // lg: '20px',
        'xl': '0rem',
        '2xl': '0px',
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      spacing: {
        '2.5': "10px",
        '7.5': "30px",
        '12.5': "50px",
        '15': "60px",
        '25': "100px"
      },
      fontFamily: {
        "plus-jakarta-sans": "var(--plus-jakarta-sans)"
      },
      colors: {
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "hsl(var(--popover-foreground))",
        },
        cream: {
          DEFAULT: "var(--cream)",
          foreground: "var(--cream-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "dash": {
          to: { "stroke-dashoffset": 0 }
        },
        "filling": {
          "0%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          },
          "90%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          },

          "100%": {
            "fill": "currentColor",
            "fill-opacity": "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-line-animation": "dash 4s linear forwards, filling 4s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}