// import { theme } from "@chakra-ui/react"

// console.log(theme.components.Accordion)

export default {
  Button: {
    baseStyle: { borderRadius: "none", letterSpacing: "tight" },
  },
  Heading: {
    baseStyle: { letterSpacing: "tight", lineHeight: "shorter", fontWeight: 700, },
    variants: {
      bestPracticeTitle: {
        fontSize: ["3xl", "4xl", "5xl", "6xl"],
        letterSpacing: "tight",
        lineHeight: "shorter"
      },
      heading2: {
        fontSize: ["2xl", "3xl", "4xl"],
        letterSpacing: "tight",
        lineHeight: "shorter"
      },
    },
  },
  Text: {
    baseStyle: { letterSpacing: "tight", lineHeight: "tall" },
    variants: {
      pageSubtitle: {
        fontSize: ["xl", "null", "null", "2xl"],
        letterSpacing: "tight",
      },
      bodyLarge: {
        fontSize: "xl",
        letterSpacing: "tight",
        lineHeight: "tall"
      },
      bodyExtraLarge: {
        fontSize: ["2xl", null, "3xl", "4xl"],
        letterSpacing: "tight",
        lineHeight: "short",
        fontWeight: 600,
      },
    },
  },
  Accordion: {
    baseStyle: {
      icon: {
        flex: "none",
        color: "var(--accent-color)",
        w: "2rem",
        h: "2rem",
      },
      button: {
        textAlign: "left",
        gap: 3,
        position: "relative",
        alignItems: "flex-start",
        _before: {
          content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          w: 2,
          bg: "var(--accent-color)",
        },
      },
      panel: {
        px: 0,
        pt: 3,
        pb: 0,
      },
      container: {
        position: "relative",
        border: "none",
        pt: 3,
        pb: 3,
        borderBottom: "0.0625rem solid",
        borderBottomColor: "gray.200",
        _last: {
          borderBottom: "none",
          pb: 0,
        },
      },
    },
  },
}
