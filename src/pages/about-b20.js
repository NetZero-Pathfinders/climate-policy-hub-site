import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Icon,
  Container,
} from "@chakra-ui/react"
import CallToAction from "@/components/CallToAction"
import {
  EnhanceIcon,
  AccelerateIcon,
  IncreaseIcon,
  FosterIcon,
  PromoteIcon,
} from "@/components/Icon"

export default function AboutB20Page() {
  return (
    <Container px={0}>
      <Stack spacing={20} pb={20}>
        <SimpleGrid columns={24} gridGap="0.0625rem">
          <Stack
            spacing={10}
            gridColumn={["2 / -2", null, null, "4 / -5", "5 / span 14"]}
            pt={[5, null, null, 16]}
          >
            <Stack spacing={6}>
              <Heading fontSize="5xl">{"About B20"}</Heading>
              <Text variant="pageSubtitle">
                {
                  "The Business 20 (B20) is the official G20 dialogue forum with the global business community. Established in 2010, the B20 is among the most prominent G20 Engagement Groups. Its working proceeding is based on Taskforces and Action Councils entrusted with key thematics that drive the priorities of each B20 edition."
                }
              </Text>

              <Text variant="pageSubtitle">
                {
                  "The B20 is composed of around 1,000 business representatives from the G20 countries, as well as from select countries and international organizations. The B20 officially conveys its final recommendations to the G20 Presidency at the B20 Summit."
                }
              </Text>
            </Stack>
            <Stack spacing={6}>
              <Heading as="h2" variant="heading2">
                {"Mission"}
              </Heading>
              <Text variant="bodyLarge">
                {
                  "To serve as a strategic platform for the business community to build consensus and set priorities on policies that address global economic challenges."
                }
              </Text>
            </Stack>
            <Stack spacing={6}>
              <Heading as="h2" variant="heading2">
                {"Vision"}
              </Heading>
              <Text variant="bodyLarge">
                {
                  "To represent the interests of the business community in relation to the G20, foster dialogue between the private and public sectors, and deliver impactful and differentiated policy recommendations to the G20."
                }
              </Text>
            </Stack>
            <Stack spacing={6}>
              <Heading as="h2" variant="heading2">
                {"About B20 Brazil"}
              </Heading>
              <Text variant="bodyLarge">
                {
                  "Brazil chaired the nineteenth G20 Summit. The Brazilian National Confederation of Industry (CNI) is the B20 host organization, determined to guide the B20 community towards a process that culminates in actionable and impactful recommendations for the G20."
                }
              </Text>
              <Text variant="bodyLarge">
                {
                  "The theme “Inclusive Growth for a Sustainable Future” will serve as the guiding principle for B20 Brazil’s endeavors. This theme covers 5 pillars that make up the B20 Brazil Guiding Claim and will steer the discussions of the Taskforces and the Action Council:"
                }
              </Text>
            </Stack>
          </Stack>
          <SimpleGrid
            columns={[1, null, 3, null, 5]}
            gridGap={10}
            gridColumn="2 / -2"
            pt={10}
            px={5}
          >
            <Divider gridColumn="1 / -1" opacity={1} />
            {[
              {
                title:
                  "Promote inclusive growth and combat hunger, poverty and inequalities",
                icon: PromoteIcon,
              },
              {
                title: "Accelerate a fair net zero transition",
                icon: AccelerateIcon,
              },
              {
                title: "Increase productivity through innovation",
                icon: IncreaseIcon,
              },
              {
                title: "Foster resilience of global value chains",
                icon: FosterIcon,
              },
              {
                title: "Enhance human capital",
                icon: EnhanceIcon,
              },
            ].map((d, i) => {
              return (
                <Stack key={i} spacing={3} alignItems="center">
                  <Center w={20} h={20} bg="blue.1000" borderRadius="full">
                    <Icon as={d.icon} w="2.75rem" h="2.75rem" color="white" />
                  </Center>
                  <Text
                    fontSize="xl"
                    lineHeight="shorter"
                    fontWeight={600}
                    textAlign="center"
                  >
                    {d.title}
                  </Text>
                </Stack>
              )
            })}
            <Divider gridColumn="1 / -1" opacity={1} />
          </SimpleGrid>
        </SimpleGrid>
        <CallToAction />
      </Stack>
    </Container>
  )
}
