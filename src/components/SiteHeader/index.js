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
          <Link href="/about-bnef" fontWeight={600} lineHeight="shorter">
            {"About BloombergNEF"}
          </Link>
        </HStack>
        <Stack
          gridColumn="-5 / -1"
          gridRow="1 / span 4"
          bg="blue.1000"
          color="white"
          alignItems="center"
          pt={5}
          pb={10}
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
                strokeWidth={3}
              >
                {/* <path
                  vectorEffect="non-scaling-stroke"
                  d="M20 20H100C105.5 20 110 24.5 110 30V90C110 95.5 105.5 100 100 100H20C14.5 100 10 95.5 10 90V30C10 24.5 14.5 20 20 20Z"
                />
                <path
                  vectorEffect="non-scaling-stroke"
                  d="M110 30L60 65L10 30"
                /> */}

                <path
                  d="M58.25 95H28.75V32.5H83.75V71.75"
                  strokeMiterlimit="10"
                />
                <path d="M36.25 25H91.25V71.8016" strokeMiterlimit="10" />
                <path d="M38.75 48.75H73.75" strokeMiterlimit="10" />
                <path d="M38.75 58.75H73.75" strokeMiterlimit="10" />
                <path d="M38.75 68.75H73.75" strokeMiterlimit="10" />
                <path d="M38.75 78.75H52.5" strokeMiterlimit="10" />
                <path d="M74.5 93.125L85.5 86.875" strokeMiterlimit="10" />
                <path d="M74.5 96.875L85.5 103.125" strokeMiterlimit="10" />
                <path
                  d="M71.25 98.75C73.3211 98.75 75 97.0711 75 95C75 92.9289 73.3211 91.25 71.25 91.25C69.1789 91.25 67.5 92.9289 67.5 95C67.5 97.0711 69.1789 98.75 71.25 98.75Z"
                  strokeMiterlimit="10"
                />
                <path
                  d="M88.75 88.75C90.8211 88.75 92.5 87.0711 92.5 85C92.5 82.9289 90.8211 81.25 88.75 81.25C86.6789 81.25 85 82.9289 85 85C85 87.0711 86.6789 88.75 88.75 88.75Z"
                  strokeMiterlimit="10"
                />
                <path
                  d="M88.75 108.75C90.8211 108.75 92.5 107.071 92.5 105C92.5 102.929 90.8211 101.25 88.75 101.25C86.6789 101.25 85 102.929 85 105C85 107.071 86.6789 108.75 88.75 108.75Z"
                  strokeMiterlimit="10"
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
