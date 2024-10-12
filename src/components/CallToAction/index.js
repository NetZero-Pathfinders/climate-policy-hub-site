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
  )
}
