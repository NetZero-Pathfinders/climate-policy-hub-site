import localFont from "next/font/local"
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

import components from "./components"

// console.log(theme.styles.global)

const avenirSans = localFont({
  display: "swap",
  src: [
    {
      path: "../pages/fonts/bb-avenir-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../pages/fonts/bb-avenir-demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../pages/fonts/bb-avenir-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bb-avenir",
  fallback: ["system-ui", "sans-serif"],
})

export default extendTheme(
  {
    styles: {
      global: {
        body: { letterSpacing: "tight" },
      },
    },
    fonts: {
      body: avenirSans.style.fontFamily,
      heading: avenirSans.style.fontFamily,
    },
    fontSizes: {
      "4xl": "2.5rem",
    },
    letterSpacings: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0",
      wide: "0.01em",
      wider: "0.02em",
    },
    colors: {
      blue: {
        50: "#EDF8FD",
        100: "#DBF0FA",
        200: "#A5D5EE",
        300: "#6CB9E4",
        400: "#46AEE0",
        500: "#0D9DDB",
        600: "#0984B9",
        700: "#046A96",
        800: "#005174",
        900: "#003D57",
        1000: "#00232E",
      },
    },
    components,
  },
  withDefaultColorScheme({ colorScheme: "blue" })
)
