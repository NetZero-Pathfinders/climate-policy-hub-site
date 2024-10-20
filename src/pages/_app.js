import { ChakraProvider, Box } from "@chakra-ui/react"
import Script from "next/script"

import theme from "@/styles/theme"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        <SiteHeader />
        <Box bg="white">
          <Component {...pageProps} />
        </Box>
        <SiteFooter />
      </ChakraProvider>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>
  )
}
