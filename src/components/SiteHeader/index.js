import { forwardRef } from "react"
import {
  Box,
  HStack,
  Center,
  Stack,
  Container,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react"
import NextLink from "next/link"

import BinaryGrid from "@/components/BinaryGrid"

const Link = forwardRef((props, ref) => {
  return <ChakraLink as={NextLink} ref={ref} {...props} />
})

export default function SiteHeader() {
  const rows = 4
  return (
    <Container maxW="none" px={0}>
      <SimpleGrid
        columns={24}
        gridTemplateRows={`repeat(${rows}, 1fr)`}
        gridGap="0.0625rem"
        borderBottom="0.0625rem solid"
        borderBottomColor="gray.200"
      >
        <Box gridColumn="1 / -1" gridRow="1 / -1">
          <BinaryGrid rows={rows} color="gray.200" gridRow="1 / -1" />
        </Box>
        <HStack
          gridColumn="2 / span 4"
          gridRow="1 / span 2"
          bg="white"
          position="relative"
          pb={5}
          pl={5}
          spacing={5}
          alignItems="flex-end"
          whiteSpace="nowrap"
        >
          <Stack spacing={1}>
            <Link href="/" fontWeight={700} lineHeight="shorter">
              {"Climate Policy Hub"}
            </Link>
            <Box fontWeight={600} lineHeight="shorter" color="gray.500">
              {"by BloombergNEF"}
            </Box>
          </Stack>
        </HStack>
        <HStack
          gridColumn="7 / span 10"
          gridRow="1 / span 2"
          bg="white"
          position="relative"
          spacing={5}
          px={5}
          pb={5}
          alignItems="flex-end"
          whiteSpace="nowrap"
        >
          <Link href="/about-b20" fontWeight={600} lineHeight="shorter">
            {"About B20"}
          </Link>
          <Box fontWeight={600} lineHeight="shorter">
            {"About BloombergNEF"}
          </Box>
        </HStack>
        <Stack
          gridColumn="-5 / -1"
          gridRow="1 / span 4"
          bg="blue.1000"
          color="white"
          alignItems="center"
          pb={5}
          px={5}
          position="relative"
          textAlign="center"
          cursor="pointer"
          _hover={{ color: "blue.500" }}
        >
          <Center flex={1}>
            <Box w={28} h={28} sx={{ svg: { w: "100%", h: "100%" } }}>
              <svg
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentcolor"
                strokeWidth={4}
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
            </Box>
          </Center>
          <Box fontSize="lg" fontWeight={600} lineHeight="shorter">
            {"Share a best practice"}
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
