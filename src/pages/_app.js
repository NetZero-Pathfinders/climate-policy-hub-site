import { ChakraProvider, Box, Center } from "@chakra-ui/react"

import theme from "@/styles/theme"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        <SiteHeader />
        <Box bg="white" minH="100vh">
          <Component {...pageProps} />
        </Box>
        <SiteFooter />
      </ChakraProvider>
    </>
  )
}
