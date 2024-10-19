import {
  Box,
  HStack,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react"

import BinaryGrid from "@/components/BinaryGrid"
import { ButtonLink, Link } from "@/components/Link"

export default function HomeBanner() {
  const rows = 8
  return (
    <Container px={0}>
      <SimpleGrid
        columns={24}
        gridTemplateRows={`repeat(${rows}, 1fr)`}
        gridGap="0.0625rem"
        mb={10}
      >
        <Box gridColumn="1 / -1" gridRow="1 / -1" position="relative">
          <BinaryGrid rows={rows} color="gray.200" gridRow="1 / -1" />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, rgba(255,255,255,0), rgba(255,255,255,1))"
          />
        </Box>
        <Stack
          p={[2, null, null, 5]}
          gridColumn={["1 / -1", "2 / -5", null, "2 / span 15"]}
          gridRow={["1 / span 8", null, null, null, "1 / span 8"]}
          bg="white"
          spacing={10}
          position="relative"
          overflow="hidden"
        >
          <Heading
            as="h1"
            fontSize={["2xl", "3xl", null, "4xl"]}
            letterSpacing="tighter"
          >
            {
              "The B20 Climate Policy Hub, in partnership with BloombergNEF, helps governments and companies accelerate the transition to a low-carbon economy"
            }
          </Heading>
          <Stack
            spacing={3}
            direction={["column", null, "row"]}
            alignItems={["flex-start", null, "center"]}
          >
            <ButtonLink
              href="mailto:pathfinders@bloomberg.net"
              size="lg"
              w={["100%", null, "auto"]}
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
              w={["100%", null, "auto"]}
            >
              {"See best practices"}
            </ButtonLink>
          </Stack>
          <HStack spacing={6} sx={{ img: { h: 16, objectFit: "contain" } }}>
            <Link
              href="https://about.bnef.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/bnef-logo.png" />
            </Link>
            <Link
              href="https://www.netzeropathfinders.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/netzero-pathfinders-logo.png" />
            </Link>
            <Link
              href="https://b20brasil.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/b20-brasil-logo.png" />
            </Link>
            <Link
              href="https://www.portaldaindustria.com.br/cni/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/cni-logo.png" />
            </Link>
            <Link
              href="https://b20brazil.org/b20-secretariat#:~:text=The%20Secretariat%20for%20B20%20Brazil,hub%20for%20coordination%20and%20communication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/secretariat-logo.png" />
            </Link>
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

      <SimpleGrid
        columns={24}
        gridGap="0.0625rem"
        bg="blue.1000"
        color="white"
        py={20}
      >
        <Stack
          spacing={10}
          alignItems="flex-start"
          gridColumn={["2 / -2", null, null, "5 / -5"]}
        >
          <Text variant="introText">
            {
              "This platform showcases best practices and innovative policies successfully implemented worldwide to tackle climate change. Drawing from the B20’s recommendations and BloombergNEF’s NetZero Pathfinders, the Hub is valuable resource for business leaders, policymakers, investors, and global stakeholders committed to addressing climate-related challenges."
            }
          </Text>
          <Text variant="introText">
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
      </SimpleGrid>
    </Container>
  )
}
