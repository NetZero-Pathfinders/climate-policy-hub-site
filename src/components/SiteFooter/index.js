import { Box, HStack, Container, Text } from "@chakra-ui/react"

import { Link } from "@/components/Link"

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
            <Link
              href="https://about.bnef.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/bnef-logo-inverted.png" />
            </Link>
            <Link
              href="https://www.netzeropathfinders.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/netzero-pathfinders-logo-inverted.png" />
            </Link>

            <Link
              href="https://b20brasil.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/b20-brasil-logo-inverted.png" />
            </Link>
            <Link
              href="https://www.portaldaindustria.com.br/cni/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/cni-logo-inverted.png" />
            </Link>
            <Link
              href="https://b20brazil.org/b20-secretariat#:~:text=The%20Secretariat%20for%20B20%20Brazil,hub%20for%20coordination%20and%20communication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/secretariat-logo-inverted.png" />
            </Link>
          </HStack>
          <Box flex={1}>
            <Text
              fontWeight={600}
              lineHeight="shorter"
              textAlign={["center", null, null, "left"]}
            >
              {
                "© 2024 Bloomberg Finance L.P. All rights reserved. Privacy Terms Disclaimer"
              }
            </Text>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
