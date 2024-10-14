import {
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Box,
  Divider,
  Center,
  Icon,
} from "@chakra-ui/react"

import { Link } from "@/components/Link"

export default function CallToAction() {
  return (
    <Container
      maxW="90rem"
      px={0}
      bgImage="url('/images/bg-cover.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Stack px={10} py={20} bg="rgba(0,0,0,0.5)" color="white" spacing={6}>
        <Text maxW="55rem" variant="bodyExtraLarge">
          {
            "Share your best practices with us. Get in touch to get your best practice featured. Email us at "
          }
          <Link href="mailto:pathfinders@bloomberg.net" color="blue.500">
            {"pathfinders@bloomberg.net"}
          </Link>
          {"."}
        </Text>
      </Stack>
    </Container>
  )
}
