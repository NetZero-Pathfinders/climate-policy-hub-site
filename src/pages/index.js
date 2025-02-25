import { readFile } from "fs/promises"
import { join } from "path"
import {
  Box,
  Heading,
  Text,
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

import SEO from "@/components/SEO"
import HomeBanner from "@/components/HomeBanner"
import { LinkBox, LinkOverlay, Link } from "@/components/Link"
import CallToAction from "@/components/CallToAction"

export default function IndexPage({ framework }) {
  const { colors } = useTheme()
  return (
    <>
      <SEO />

      <Stack spacing={20} pb={20}>
        <HomeBanner />
        <Container px={0} id="best-practices" pt={10} mt={-10}>
          <SimpleGrid columns={24} gridGap="0.0625rem">
            <Stack gridColumn="2 / -2" pb={10}>
              <Heading
                as="h2"
                fontSize={["sm", null, "md"]}
                textTransform="uppercase"
                letterSpacing="wider"
                display="block"
                fontWeight={700}
                mb={3}
              >
                {"B20 Climate Policy Hub recommendations"}
              </Heading>
              <Text variant="bodyLarge" maxW="52rem">
                {
                  "This platform showcases best practices and innovative policies successfully implemented worldwide to tackle climate change."
                }
              </Text>
            </Stack>
            <Accordion
              allowMultiple
              borderBottom="0.0625rem solid"
              borderBottomColor="gray.200"
              gridColumn="2 / -2"
              pb={3}
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
                      <Heading variant="accordionTitle">
                        <Text
                          as="span"
                          fontSize={["sm", null, "md"]}
                          textTransform="uppercase"
                          letterSpacing="wider"
                          display="block"
                          fontWeight={700}
                          mb={3}
                        >
                          {`Taskforce ${id[1]}`}
                        </Text>
                        {name}
                      </Heading>
                    </AccordionButton>
                    <AccordionPanel>
                      <RecommendationAccordion items={items} />
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </SimpleGrid>
        </Container>
        <CallToAction />
      </Stack>
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
                fontSize={["lg", "xl", "2xl"]}
                lineHeight="short"
                fontWeight={400}
                mt={1.5}
                maxW="52rem"
              >
                <Text
                  as="span"
                  fontSize={["sm", null, "md"]}
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
                fontSize={["lg", "xl", "2xl"]}
                lineHeight="short"
                fontWeight={400}
                mt={1.5}
                maxW="52rem"
              >
                <Text
                  as="span"
                  fontSize={["sm", null, "md"]}
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
                columns={[1, null, 2]}
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
                        {/* <Text fontWeight={600} color="gray.500">
                          {day(item.date).format("DD MMM YYYY")}
                        </Text> */}
                      </Stack>
                    </LinkBox>
                  )
                })}
                <LinkBox
                  as={HStack}
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
                      <LinkOverlay href="mailto:pathfinders@bloomberg.net">
                        {"Share a best practice"}
                      </LinkOverlay>
                    </Text>
                    <Text fontSize="lg">
                      {"Do you have a best practice to share? Email us at "}
                      <Link href="mailto:pathfinders@bloomberg.net">
                        {"pathfinders@bloomberg.net"}
                      </Link>
                    </Text>
                  </Stack>
                </LinkBox>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
