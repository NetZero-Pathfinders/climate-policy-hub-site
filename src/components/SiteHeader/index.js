import {
  Box,
  HStack,
  Center,
  Stack,
  Container,
  SimpleGrid,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

import { LinkOverlay, LinkBox, ButtonLink, Link } from "@/components/Link"
import BinaryGrid from "@/components/BinaryGrid"
import { MenuIcon } from "@/components/Icon"

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <HStack
      gridColumn={["13 / -1", "-5 / -1", null, "-9 / -1", "9 / span 8"]}
      gridRow={["1 / -1", null, null, null, "1 / span 2"]}
      bg={["transparent", null, null, "white"]}
      position="relative"
      spacing={[2, 5]}
      px={[2, null, null, 5]}
      pb={[2, null, null, 5]}
      pt={[2, null, 2, 0]}
      alignItems={["center", null, null, "flex-end"]}
      justifyContent={["center", null, null, "flex-start"]}
      whiteSpace="nowrap"
      my={[5, null, null, 0]}
    >
      <Link
        href="/about-b20"
        fontWeight={600}
        lineHeight="shorter"
        _hover={{ color: "blue.500" }}
        display={["none", null, null, "block"]}
      >
        {"About B20"}
      </Link>
      <Link
        href="/about-bnef"
        fontWeight={600}
        lineHeight="shorter"
        _hover={{ color: "blue.500" }}
        display={["none", null, null, "block"]}
      >
        {"About BloombergNEF"}
      </Link>
      <Button
        display={["inline-flex", null, null, "none"]}
        px={0}
        onClick={onOpen}
      >
        <MenuIcon />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody px={0}>
            <Stack spacing={2}>
              <ButtonLink
                href="/about-b20"
                variant="ghost"
                colorScheme="gray"
                justifyContent="flex-start"
                px={5}
                color="white"
                _hover={{ bg: "gray.900" }}
                _focusVisible={{ bg: "gray.900" }}
                _active={{ bg: "gray.800" }}
                onClick={onClose}
              >
                {"About B20"}
              </ButtonLink>
              <ButtonLink
                href="/about-bnef"
                variant="ghost"
                colorScheme="gray"
                justifyContent="flex-start"
                px={5}
                color="white"
                _hover={{ bg: "gray.900" }}
                _focusVisible={{ bg: "gray.900" }}
                _active={{ bg: "gray.800" }}
                onClick={onClose}
              >
                {"About BloombergNEF"}
              </ButtonLink>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <ButtonLink
              href="mailto:pathfinders@bloomberg.net"
              w="100%"
              leftIcon={
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth={2}
                  style={{ width: "1.5rem", height: "1.5rem" }}
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
              }
            >
              {"Share a best practice"}
            </ButtonLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  )
}

export default function SiteHeader() {
  const rows = 4
  return (
    <Container px={0} zIndex={1} position="relative">
      <SimpleGrid
        columns={24}
        gridTemplateRows={`repeat(${rows}, 1fr)`}
        gridGap="0.0625rem"
      >
        <Box gridColumn="1 / -1" gridRow="1 / -1">
          <BinaryGrid rows={rows} color="gray.200" gridRow="1 / -1" />
        </Box>
        <HStack
          gridColumn={[
            "1 / span 12",
            "2 / span 11",
            "2 / span 7",
            null,
            "2 / span 5",
          ]}
          gridRow={["1 / -1", null, "1 / span 2"]}
          bg="white"
          position="relative"
          pb={[2, null, null, 5]}
          pt={[2, null, null, 0]}
          pl={[2, null, null, 5]}
          spacing={5}
          alignItems={["center", null, null, "flex-end"]}
          whiteSpace="nowrap"
        >
          <Stack spacing={0}>
            <Link
              href="/"
              fontSize="lg"
              fontWeight={700}
              lineHeight="shorter"
              _hover={{ textDecoration: "none", color: "blue.500" }}
            >
              {"B20 Climate Policy Hub"}
            </Link>
            <Box fontWeight={600} lineHeight="shorter" color="gray.500">
              {"by BloombergNEF"}
            </Box>
          </Stack>
        </HStack>
        <Navigation />
        <LinkBox
          display={["none", null, null, null, "flex"]}
          as={Center}
          gridColumn="-5 / -1"
          gridRow="1 / span 4"
          bg="blue.500"
          color="white"
          position="relative"
          cursor="pointer"
          _hover={{ bg: "blue.600" }}
        >
          <Stack spacing={0} alignItems="center">
            <Box
              w={[10, null, null, 16, 28]}
              h={[10, null, null, 16, 28]}
              sx={{ svg: { w: "100%", h: "100%" } }}
            >
              <svg
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentcolor"
                strokeWidth={3}
              >
                <path d="M58.25 95H28.75V32.5H83.75V71.75" />
                <path d="M36.25 25H91.25V71.8016" />
                <path d="M38.75 48.75H73.75" />
                <path d="M38.75 58.75H73.75" />
                <path d="M38.75 68.75H73.75" />
                <path d="M38.75 78.75H52.5" />
                <path d="M74.5 93.125L85.5 86.875" />
                <path d="M74.5 96.875L85.5 103.125" />
                <path d="M71.25 98.75C73.3211 98.75 75 97.0711 75 95C75 92.9289 73.3211 91.25 71.25 91.25C69.1789 91.25 67.5 92.9289 67.5 95C67.5 97.0711 69.1789 98.75 71.25 98.75Z" />
                <path d="M88.75 88.75C90.8211 88.75 92.5 87.0711 92.5 85C92.5 82.9289 90.8211 81.25 88.75 81.25C86.6789 81.25 85 82.9289 85 85C85 87.0711 86.6789 88.75 88.75 88.75Z" />
                <path d="M88.75 108.75C90.8211 108.75 92.5 107.071 92.5 105C92.5 102.929 90.8211 101.25 88.75 101.25C86.6789 101.25 85 102.929 85 105C85 107.071 86.6789 108.75 88.75 108.75Z" />
              </svg>
            </Box>
            <LinkOverlay
              href="mailto:pathfinders@bloomberg.net"
              fontSize="lg"
              fontWeight={600}
              lineHeight="shorter"
            >
              {"Share a best practice"}
            </LinkOverlay>
          </Stack>
        </LinkBox>
      </SimpleGrid>
    </Container>
  )
}
