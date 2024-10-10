import { ChakraProvider, Box, Center } from "@chakra-ui/react"

import theme from "@/styles/theme"
import SiteHeader from "@/components/SiteHeader"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        {/* <SiteHeader /> */}
        <Box bg="white" minH="100vh">
          {/* <Component {...pageProps} /> */}
          <Center w="100vw" h="100vh">
            <Box>{"Climate Policy Hub"}</Box>
          </Center>
        </Box>
      </ChakraProvider>
    </>
  )
}
