import { Stack, Text, Container, SimpleGrid } from "@chakra-ui/react"

import { Link } from "@/components/Link"

export default function CallToAction() {
  return (
    <Container
      px={0}
      bgImage="url('/images/bg-cover.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <SimpleGrid columns={24} gridGap="0.0625rem" py={20} bg="rgba(0,0,0,0.5)">
        <Stack color="white" spacing={6} gridColumn="2 / -2">
          <Text maxW="55rem" variant="bodyExtraLarge">
            {
              "Have you seen excellent examples of innovative policy in action? Get in touch to feature your best practice at  "
            }
            <Link href="mailto:pathfinders@bloomberg.net" color="blue.500">
              {"pathfinders@bloomberg.net"}
            </Link>
            {"."}
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
