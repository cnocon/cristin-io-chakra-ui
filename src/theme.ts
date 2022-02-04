import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    brand: "Pacifico",
    accent: "Oswald, Impact, sans-serif",
    heading: "Lato, Geneva, Tahoma, sans-serif",
    body: "Open Sans, Arial, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    caption: "0.75rem",
    // xs: "0.75rem",
    // sm: "0.875rem",
    // md: "1rem",
    // lg: "1.125rem",
    // xl: "1.25rem",
    // "2xl": "1.5rem",
    // "3xl": "1.875rem",
    // "4xl": "2.25rem",
    // "5xl": "3rem",
    // "6xl": "3.75rem",
    // "7xl": "4.5rem",
    // "8xl": "6rem",
    // "9xl": "8rem",
  },
  colors: {
    brand: {
      primary: {
        base: "#345",
        light: "#5c7a99",
        lightest: "#9fb2c6",
        dark: "#1e2b38",
      },
      secondary: {
        base: "#50dbcc",
        light: "#a6ede6",
        dark: "#22a598",
      },
    },
  },
  semanticTokens: {
    colors: {
      footerText: {
        default: "brand.primary.dark",
        _dark: "brand.primary.light",
      },
    },
  },
});

export default theme;
