import {
  Heading,
  Text,
  Box,
  Stack,
  SimpleGrid,
  background,
} from "@chakra-ui/react"
import { Link } from "@/components/Link"
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
  h1: (props) => <Heading as="h1" py={6} {...props} />,
  h2: (props) => <Heading as="h2" variant="heading2" py={6} {...props} />,
  h3: (props) => <Heading as="h3" variant="heading3" py={6} {...props} />,
  h4: (props) => <Heading as="h4" variant="heading4" py={6} {...props} />,
  h5: (props) => <Heading as="h5" variant="heading4" py={6} {...props} />,
  h6: (props) => <Heading as="h6" variant="heading4" py={6} {...props} />,
  p: (props) => <Text as="p" variant="bodyLarge" pb={6} {...props} />,
  a: (props) => (
    <Link
      fontSize={["xl", null, null, "2xl"]}
      letterSpacing="tight"
      lineHeight="tall"
      color="blue.500"
      fontWeight={600}
      textDecoration="underline"
      _hover={{ color: "blue.600" }}
      _focus={{ color: "blue.600" }}
      _active={{ color: "blue.600" }}
      {...props}
    />
  ),
  img: (props) => {
    return <img src={props.src} alt={props.alt || ""} />
    // return <img src={props.src.split(".").join("-md.")} />
  },
  ul: (props) => {
    return (
      <Stack
        as="ul"
        spacing={2}
        w="100%"
        pl={6}
        pb={6}
        fontSize={["xl", null, null, "2xl"]}
        letterSpacing="tight"
        lineHeight="tall"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          li: { a: { color: "blue.500" } },
        }}
        {...props}
      />
    )
  },
  ol: (props) => {
    return (
      <Stack
        as="ol"
        spacing={5}
        w="100%"
        pl={6}
        pb={6}
        fontSize={["xl", null, null, "2xl"]}
        letterSpacing="tight"
        lineHeight="tall"
        gridColumn={["1 / -1", null, "2 / -3"]}
        sx={{
          li: { a: { color: "blue.500" } },
        }}
        {...props}
      />
    )
  },
}

export const bestPracticeComponents = {
  KeyFigures: (props) => {
    return (
      <Box
        as="aside"
        gridColumn={["1 / -1", null, null, null, "2 / -2"]}
        pb={10}
      >
        <SimpleGrid
          as="ul"
          columns={[1, null, null, 3]}
          spacing={10}
          {...props}
        />
      </Box>
    )
  },
  KeyFigure: ({ title, subtitle, ...restProps }) => {
    return (
      <Stack
        as="li"
        spacing={3}
        borderBottom="0.25rem solid"
        borderColor="black"
        py={[0, null, null, 6]}
        {...restProps}
      >
        <Heading as="h3" fontSize="4xl" lineHeight="shorter" color="blue.500">
          {title}
        </Heading>
        <Text
          fontSize="xl"
          lineHeight="short"
          fontWeight={500}
          color="gray.500"
        >
          {subtitle}
        </Text>
      </Stack>
    )
  },
  BarChart: (props) => {
    return (
      <ChartContainer pb={6}>
        <ChartWrapper chartType="bar" {...props} />
      </ChartContainer>
    )
  },
  LineChart: (props) => {
    return (
      <ChartContainer pb={6}>
        <ChartWrapper chartType="line" {...props} />
      </ChartContainer>
    )
  },
  ScatterPlot: (props) => {
    return (
      <ChartContainer pb={6}>
        <ChartWrapper chartType="scatter" {...props} />
      </ChartContainer>
    )
  },
}

export default { ...baseComponents, ...bestPracticeComponents }
