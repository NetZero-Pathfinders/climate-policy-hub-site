import CallToAction from "@/components/CallToAction"
import { Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react"

export default function AboutB20Page() {
  return (
    <Stack spacing={20} pb={20}>
      <SimpleGrid columns={24} gridGap="0.0625rem">
        <Stack
          spacing={10}
          gridColumn={["2 / -2", null, null, "5 / span 14"]}
          py={5}
        >
          <Stack spacing={6}>
            <Heading fontSize="5xl">{"About BloombergNEF"}</Heading>
            <Text variant="pageSubtitle">
              {
                "BloombergNEF is a leading provider of forward-thinking primary research and analysis on the trends driving the transition to a lower-carbon economy."
              }
            </Text>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" variant="heading2">
              {"Overview"}
            </Heading>
            <Text variant="bodyLarge">
              {
                "With a team of trusted experts across six continents, BloombergNEF (BNEF) leverages sophisticated data sets to create clear perspectives and in-depth forecasts. These are built to frame the financial, economic and policy implications of industry-transforming trends and technologies."
              }
            </Text>
            <Text variant="bodyLarge">
              {
                "Our approach provides independent analysis and insight through rigorous examinations of specific sectors and markets, as well as broad, cross-sector, global trends and implications."
              }
            </Text>
            <Text variant="bodyLarge">
              {
                "Our clients include corporate strategy and business development professionals, finance professionals as well as policy makers and regulators. We work with the largest corporations across utilities and generation, oil & gas, equipment manufacturers, banking and finance, and government."
              }
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <CallToAction />
    </Stack>
  )
}
