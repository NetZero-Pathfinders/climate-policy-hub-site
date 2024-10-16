import { readFile } from "fs/promises"
import { join } from "path"
import Head from "next/head"
import {
  Box,
  Heading,
  Text,
  Center,
  Container,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useTheme,
  HStack,
  Stack,
} from "@chakra-ui/react"
import day from "dayjs"

import HomeBanner from "@/components/HomeBanner"
import { LinkBox, LinkOverlay } from "@/components/Link"

export default function IndexPage({ framework }) {
  const { colors } = useTheme()
  return (
    <>
      <Head>
        <title>{"Create Next App"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Stack spacing={20}>
        <HomeBanner />
        <Container maxW="90rem" px={5} id="best-practices">
          <Accordion
            allowMultiple
            borderBottom="0.0625rem solid"
            borderBottomColor="gray.200"
          >
            {framework.map(({ id, name, items }) => {
              const accentColor = colors.green[500]
              return (
                <AccordionItem
                  key={id}
                  style={{ "--accent-color": accentColor }}
                >
                  <AccordionButton py={5}>
                    <AccordionIcon mt={1.5} />
                    <Heading lineHeight="short">{name}</Heading>
                  </AccordionButton>
                  <AccordionPanel>
                    <RecommendationAccordion items={items} />
                  </AccordionPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </Container>

        <Container
          maxW="90rem"
          px={0}
          bgImage="url('/images/bg-cover.png')"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
        >
          <Stack px={5} py={20} bg="rgba(0,0,0,0.5)" color="white" spacing={6}>
            <Heading maxW="55rem">
              {
                "Share your best practices with us. Get in touch to get your best practice featured."
              }
            </Heading>
            <Text fontSize="2xl" fontWeight={600}>
              {"Email us at "}
              <Text as="span" color="blue.500">
                {"co2excel@bloomberg.net"}
              </Text>
              {"."}
            </Text>
          </Stack>
        </Container>

        <Box bg="blue.1000" color="white">
          <Container maxW="90rem" px={5}>
            <HStack
              spacing={10}
              sx={{ img: { h: 16, objectFit: "contain" } }}
              py={20}
              flexDirection={["column", null, null, "row-reverse"]}
            >
              <HStack
                spacing={6}
                sx={{ img: { h: 12, objectFit: "contain" } }}
                flexDirection={["column", null, null, "row"]}
              >
                <img src="/images/b20-brasil-logo-inverted.png" />
                <img src="/images/cni-logo-inverted.png" />
                <img src="/images/bnef-logo-inverted.png" />
              </HStack>
              <Box flex={1}>
                <Text
                  fontWeight={600}
                  lineHeight="shorter"
                  textAlign={["center", null, null, "left"]}
                >
                  {
                    "© 2022 Bloomberg Finance L.P. All rights reserved. Privacy Terms Disclaimer"
                  }
                </Text>
              </Box>
            </HStack>
          </Container>
        </Box>
      </Stack> */}
    </>
  )
}

export async function getStaticProps() {
  const framework = await readFile(
    join(process.env.PWD, "public", "framework.json"),
    "utf8"
  ).then((d) => JSON.parse(d.trim()))
  return {
    props: { framework },
  }
}

function RecommendationAccordion({ items }) {
  const { colors } = useTheme()
  const accentColor = colors.purple[500]
  return (
    <Accordion allowMultiple>
      {items.map(({ id, name, items }) => {
        return (
          <AccordionItem key={id} style={{ "--accent-color": accentColor }}>
            <AccordionButton py={3}>
              <AccordionIcon />
              <Heading
                fontSize="2xl"
                lineHeight="short"
                fontWeight={400}
                mt={1.5}
                maxW="52rem"
              >
                <Text
                  as="span"
                  fontSize="md"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  display="block"
                  fontWeight={700}
                  mb={3}
                >
                  {`Recommendation ${id[1]}.${id[3]}`}
                </Text>
                {name}
              </Heading>
            </AccordionButton>
            <AccordionPanel>
              <ActionAccordion items={items} />
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

function ActionAccordion({ items }) {
  const { colors } = useTheme()
  const accentColor = colors.pink[500]
  return (
    <Accordion allowMultiple>
      {items.map(({ id, name, items }) => {
        return (
          <AccordionItem key={id} style={{ "--accent-color": accentColor }}>
            <AccordionButton py={3}>
              <AccordionIcon />
              <Heading
                fontSize="xl"
                lineHeight="short"
                fontWeight={400}
                mt={1.5}
                maxW="52rem"
              >
                <Text
                  as="span"
                  fontSize="md"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  display="block"
                  fontWeight={700}
                  mb={3}
                >
                  {`Policy action ${id[1]}.${id[3]}.${id[5]}`}
                </Text>
                {name}
              </Heading>
            </AccordionButton>
            <AccordionPanel>
              <SimpleGrid
                mt={3}
                columns={2}
                gridGap={10}
                borderLeft="0.5rem solid"
                borderLeftColor="blue.500"
                px="3.25rem"
                pt={3}
                pb={3}
              >
                <Box gridColumn="1 / -1">
                  <Heading
                    fontSize="md"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    {"Best practices"}
                  </Heading>
                </Box>
                {items.map((item) => {
                  return (
                    <LinkBox key={item.slug}>
                      <Stack spacing={3}>
                        <Heading fontSize="2xl">
                          <LinkOverlay href={item.slug}>
                            {item.title}
                          </LinkOverlay>
                        </Heading>
                        <Text fontWeight={600} color="gray.500">
                          {day(item.date).format("DD MMM YYYY")}
                        </Text>
                      </Stack>
                    </LinkBox>
                  )
                })}
                <HStack
                  p={5}
                  bg="blue.500"
                  color="white"
                  alignItems="flex-start"
                  cursor="pointer"
                  _hover={{ bg: "blue.600" }}
                >
                  <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    stroke="currentcolor"
                    strokeWidth={2}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      marginTop: "0.25rem",
                    }}
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
                  <Stack spacing={2}>
                    <Text fontWeight={600} fontSize="2xl">
                      {"Share a best practice"}
                    </Text>
                    <Text fontSize="lg">
                      {
                        "Do you have a best practice to share? Email us at co2excel@bloomberg.net"
                      }
                    </Text>
                  </Stack>
                </HStack>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
