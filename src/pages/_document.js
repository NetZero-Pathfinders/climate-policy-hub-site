import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
