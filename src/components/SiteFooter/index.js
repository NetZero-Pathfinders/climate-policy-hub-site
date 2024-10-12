
import {
  Box,
  HStack,
  Container,
  Text,
} from "@chakra-ui/react"



export default function SiteFooter() {
  return (
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
  )
}
