import { Heading, Text, Box } from "@chakra-ui/react"

import ChartWrapper from "@/components/ChartWrapper"

function ChartContainer(props) {
  return (
    <Box
      gridColumn={["1 / -1", null, "1 / -2", "1 / -3", "2 / -3"]}
      sx={{
        ".chart": {
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          ".chart__title": {
            fontSize: "2xl",
            lineHeight: "shorter",
            letterSpacing: "-0.015em",
            fontWeight: 700,
          },
          "figure": {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "md",
            lineHeight: "short",
            fontWeight: 500,
            color: "gray.500",
          },
        },
      }}
      {...props}
    />
  )
}

export const baseComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  p: (props) => <Text as="p" fontSize="lg" {...props} />,
}

export const bestPracticeComponents = {
  KeyFigures: () => null,
  KeyFigure: () => null,
  BarChart: (props) => {
    return (
      <ChartContainer>
        <ChartWrapper chartType="bar" {...props} />
      </ChartContainer>
    )
  },
  LineChart: (props) => {
    return (
      <ChartContainer>
        <ChartWrapper chartType="line" {...props} />
      </ChartContainer>
    )
  },
  ScatterPlot: (props) => {
    return (
      <ChartContainer>
        <ChartWrapper chartType="scatter" {...props} />
      </ChartContainer>
    )
  },
}

export default { ...baseComponents, ...bestPracticeComponents }
