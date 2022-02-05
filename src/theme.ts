import { extendTheme } from "@chakra-ui/react";

const Heading = {
  baseStyle: {
    fontWeight: "600",
    fontFamily: "heading",
    color: {
      default: "brand.700",
      _dark: "brand.200",
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
  // // Two sizes: sm and md
  // sizes: {
  //   sm: {
  //     fontSize: "sm",
  //     px: 4, // <-- px is short for paddingLeft and paddingRight
  //     py: 3, // <-- py is short for paddingTop and paddingBottom
  //   },
  //   md: {
  //     fontSize: "md",
  //     px: 6, // <-- these values are tokens from the design system
  //     py: 4, // <-- these values are tokens from the design system
  //   },
  // },
  // // Two variants: outline and solid
  // variants: {
  //   outline: {
  //     border: "2px solid",
  //     borderColor: "purple.500",
  //     color: "purple.500",
  //   },
  //   solid: {
  //     bg: "purple.500",
  //     color: "white",
  //   },
  // },
  // // The default size and variant values
  // defaultProps: {
  //   size: "md",
  //   variant: "outline",
  // },
};

const theme = extendTheme({
  components: {
    Heading,
  },
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
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#eaeefb",
      100: "#cdd3e5",
      200: "#adb8d0",
      300: "#8e9ebe",
      400: "#6d83ab",
      500: "#556c92",
      600: "#415572",
      700: "#2e3f52",
      800: "#1a2632",
      900: "#050c15",
    },
    // https://smart-swatch.netlify.app/#50dbcc
    green: {
      50: "#dcfefe",
      100: "#b8f3f4",
      200: "#90eae6",
      300: "#68e1d8",
      400: "#41d8c8",
      500: "#27beb8",
      600: "#189194",
      700: "#0a616b",
      800: "#003440",
      900: "#001318",
    },
    brand: {
      // https://smart-swatch.netlify.app/#1a2632
      50: "#eaf3fb",
      100: "#cdd9e5",
      200: "#adbfd0",
      300: "#8ea6be",
      400: "#6d8cab",
      500: "#557392",
      600: "#415972",
      700: "#2e4052",
      800: "#1a2632",
      900: "#050e15",
    },
  },
  semanticTokens: {
    colors: {
      body: {
        default: "brand.800",
        _dark: "brand.100",
      },
      footerText: {
        default: "brand.800",
        _dark: "brand.200",
      },
    },
  },
});

export default theme;
