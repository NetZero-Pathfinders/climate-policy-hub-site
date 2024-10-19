import Head from "next/head"
import { useRouter } from "next/router"

const siteUrl = "https://climatepolicyhub.netzeropathfinders.com/"

export default function SEO({
  title = "",
  description = "",
  cover = "social-cover.jpg",
  type = "website",
  lang = "en-US",
}) {
  const { basePath, asPath } = useRouter()

  const fixedCover = cover

  const slugUrl =
    siteUrl + basePath + (asPath[0] === "/" ? asPath.slice(1) : asPath)
  const coverImg = fixedCover ? siteUrl + basePath + "images/" + fixedCover : ""

  const combinedTitle = title
    ? `Climate Policy Hub | ${title}`
    : `Climate Policy Hub`

  return (
    <Head>
      <meta content={lang} httpEquiv="Content-Language" />

      <title>{combinedTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={slugUrl} />
      <meta property="og:title" content={combinedTitle} />
      <meta property="og:description" content={description} />
      {cover && <meta name="image" property="og:image" content={coverImg} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={slugUrl} />
      <meta name="twitter:title" content={combinedTitle} />
      <meta name="twitter:description" content={description} />
      {cover && <meta name="twitter:image" content={coverImg} />}

      <link rel="canonical" href={slugUrl} />
    </Head>
  )
}
