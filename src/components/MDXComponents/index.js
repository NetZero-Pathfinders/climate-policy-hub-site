import { Heading, Text } from "@chakra-ui/react"

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
  BarChart: () => null,
  LineChart: () => null,
  ScatterPlot: () => null,
}

export default { ...baseComponents, ...bestPracticeComponents }
