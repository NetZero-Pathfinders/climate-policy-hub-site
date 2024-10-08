import { Stack, SimpleGrid } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import getPages from "@/utils/api/server/getPages"
import getPage from "@/utils/api/server/getPage"
import mdxComponents from "@/components/MDXComponents"

export default function BestPracticePage({ slug, source, pages }) {
  return (
    <SimpleGrid columns={24} gridGap="0.0625rem">
      <Stack gridColumn="2 / span 15" spacing={6} py={20}>
        <MDXRemote {...source} components={mdxComponents}>
          {"Best practice"}
        </MDXRemote>
      </Stack>
    </SimpleGrid>
  )
}

export const getStaticPaths = async () => {
  const pages = await getPages({ pageType: "best-practices" })
  return {
    paths: pages.map((page) => {
      const slug = page.slug.split("/").pop()
      return { params: { slug } }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const pages = await getPages({ pageType: "best-practices" })

  const source = await getPage({
    slug: `/best-practices/${slug}`,
    pageType: "best-practices",
  })

  return { props: { source, slug, pages } }
}
