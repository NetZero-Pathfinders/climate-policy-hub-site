import {
  EnhanceIcon,
  AccelerateIcon,
  IncreaseIcon,
  FosterIcon,
  PromoteIcon,
} from "@/components/Icon"
import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Divider,
  Center,
  Icon,
} from "@chakra-ui/react"

export default function AboutB20Page() {
  return (
    <Stack spacing={20}>
      <SimpleGrid columns={24} gridGap="0.0625rem">
        <Stack spacing={6} gridColumn="2 / span 15" py={5} px={5}>
          <Heading fontSize="5xl">{"About B20"}</Heading>
          <Text fontSize="2xl">
            {
              "The Business 20 (B20) is the official G20 dialogue forum with the global business community. Established in 2010, the B20 is among the most prominent G20 Engagement Groups. Its working proceeding is based on Task Forces and Action Councils entrusted with key thematics that drive the priorities of each B20 edition."
            }
          </Text>
          <Text fontSize="2xl">
            {
              "They are composed of around 1.000 businesses representatives from the G20 countries and from selected invited countries and international organizations. The B20 officially conveys its final recommendations to the G20 Presidency at the B20 Summit."
            }
          </Text>
          <Heading fontSize="3xl">{"Mission"}</Heading>
          <Text fontSize="xl">
            {
              "To serve as a strategic platform for the business community to build consensus and set priorities on policies to address global economic challenges."
            }
          </Text>
          <Heading fontSize="3xl">{"Vision"}</Heading>
          <Text fontSize="xl">
            {
              "Represent the interests of the business community in relation to the G20, foster dialogue between private and public sector at G20 level and deliver impactful and differentiated policy recommendations to the G20"
            }
          </Text>
          <Heading fontSize="3xl">{"About B20 Brazil"}</Heading>
          <Text fontSize="xl">
            {
              "Brazil chaired the nineteenth G20 Summit. The Brazilian National Confederation of Industry (CNI) is the B20 host organization, determined to guide the B20 community towards a process that culminates in actionable and impactful recommendations for the G20."
            }
          </Text>
          <Text fontSize="xl">
            {
              "The theme “Inclusive Growth for a Sustainable Future” will serve as the guiding principle for B20 Brazil’s endeavors. This theme covers 5 pillars that make up the B20 Brazil Guiding Claim and will steer the discussions of the Task Forces and the Action Council:"
            }
          </Text>
        </Stack>
        <SimpleGrid
          columns={5}
          gridGap={10}
          gridColumn="2 / -2"
          pt={10}
          pb={20}
          px={5}
        >
          <Divider gridColumn="1 / -1" opacity={1} />
          {[
            {
              title:
                "Promote inclusive growth and combat hunger, poverty and inequalities",
              icon: PromoteIcon
            },
            {
              title:
                "Accelerate a fair net zero transition",
              icon: AccelerateIcon
            },
            {
              title:
                "Increase productivity through innovation",
              icon: IncreaseIcon
            },
            {
              title:
                "Foster resilience of global value chains",
              icon: FosterIcon
            },
            {
              title:
                "Enhance human capital",
              icon: EnhanceIcon
            }
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
    </Stack>
  )
}
