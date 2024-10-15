import {
  Box,
  HStack,
  Center,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"

import BinaryGrid from "@/components/BinaryGrid"
import { ButtonLink } from "@/components/Link"

export default function HomeBanner() {
  const rows = 8
  return (
    <Container maxW="none" px={0}>
      <SimpleGrid
        columns={24}
        gridTemplateRows={`repeat(${rows}, 1fr)`}
        gridGap="0.0625rem"
      >
        <Box gridColumn="1 / -1" gridRow="1 / -1">
          <BinaryGrid rows={rows} color="gray.200" gridRow="1 / -1" />
        </Box>
        <Stack
          p={5}
          gridColumn={["1 / -1", "2 / -2", null, "2 / span 15"]}
          gridRow={["1 / span 8", null, null, null, "1 / span 8"]}
          bg="white"
          spacing={10}
          position="relative"
          overflow="hidden"
        >
          <Heading fontSize={["2xl", "3xl", null, "4xl"]} letterSpacing="tighter">
            {
              "The B20 Climate Policy Hub, in partnership with BloombergNEF, aims to help governments and companies to accelerate the transition to a low-carbon economy"
            }
          </Heading>
          <Stack spacing={3} direction={["column", null, "row"]}>
            <ButtonLink
              href="mailto:pathfinders@bloomberg.net"
              size="lg"
              leftIcon={
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth={2}
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    d="M20 20H100C105.5 20 110 24.5 110 30V90C110 95.5 105.5 100 100 100H20C14.5 100 10 95.5 10 90V30C10 24.5 14.5 20 20 20Z"
                  />
                  <path
                    vectorEffect="non-scaling-stroke"
                    d="M110 30L60 65L10 30"
                  />
                </svg>
              }
            >
              {"Share a best practice"}
            </ButtonLink>
            <ButtonLink
              size="lg"
              colorScheme="gray"
              variant="ghost"
              href="#best-practices"
            >
              {"See best practices"}
            </ButtonLink>
          </Stack>
          <HStack spacing={6} sx={{ img: { h: 16, objectFit: "contain" } }}>
            <img src="/images/netzero-pathfinders-logo.png" />
            <img src="/images/b20-brasil-logo.png" />
            <img src="/images/cni-logo.png" />
          </HStack>
        </Stack>

        {/* <Stack
          bg="white"
          gridColumn="17 / span 4"
          gridRow="5 /span 4"
          spacing={5}
          alignItems="flex-start"
          justifyContent="flex-end"
          pb={5}
          px={5}
          position="relative"
        >
          <Box fontWeight={600} lineHeight="shorter">
            {"See Best practices"}
          </Box>
        </Stack> */}
      </SimpleGrid>

      <Center bg="blue.1000" color="white" py={20} px={[5, 10, 16, 0]}>
        <Stack spacing={10} alignItems="flex-start">
          <Text variant="introText" maxW="58rem">
            {
              "This platform showcases best practices and innovative policies successfully implemented worldwide to tackle climate change. Drawing from the B20’s recommendations and BloombergNEF’s NetZero Pathfinders, the Hub is valuable resource for business leaders, policymakers, investors, and global stakeholders committed to addressing climate-related challenges."
            }
          </Text>
          <Text variant="introText" maxW="58rem">
            {
              "The initiative seeks to remain dynamic and continually updated with the engagement of future B20 cycles, integrating their recommendations to ensure they reflect the latest global priorities and strategies for climate action."
            }
          </Text>
          <ButtonLink
            href="mailto:pathfinders@bloomberg.net"
            size="lg"
            leftIcon={
              <svg
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentcolor"
                strokeWidth={2}
                style={{ width: "1.5rem", height: "1.5rem" }}
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  d="M20 20H100C105.5 20 110 24.5 110 30V90C110 95.5 105.5 100 100 100H20C14.5 100 10 95.5 10 90V30C10 24.5 14.5 20 20 20Z"
                />
                <path
                  vectorEffect="non-scaling-stroke"
                  d="M110 30L60 65L10 30"
                />
              </svg>
            }
          >
            {"Share a best practice"}
          </ButtonLink>
        </Stack>
      </Center>
    </Container>
  )
}
