import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import getFramework from "@/utils/api/server/getFramework"
import getPages from "@/utils/api/server/getPages"
import getPage from "@/utils/api/server/getPage"
import day from "dayjs"

import mdxComponents from "@/components/MDXComponents"
import CallToAction from "@/components/CallToAction"

export default function BestPracticePage({ slug, source, pages, tags }) {
  const { frontmatter } = source
  console.log("Source", source)
  return (
    <Stack pb={20}>
    <SimpleGrid columns={24} gridGap="0.0625rem">
      <Stack gridColumn={["2 / -2", null, null, "5 / span 14"]} spacing={6} pt={16}>
        <Stack spacing={3}>
          <Heading as="h1" variant="bestPracticeTitle">
            {frontmatter.title}
          </Heading>
          {frontmatter.description && (
            <Text variant="pageSubtitle">{frontmatter.description}</Text>
          )}
          <Text fontSize="lg" fontWeight={600} color="blue.500">
            {`Updated on ${day(frontmatter.date).format("MMMM DD, YYYY")}`}
          </Text>
          <Wrap gridColumn="2 / span 15" spacing={3} py={3}>
            {tags.map((tag) => {
              return (
                <WrapItem
                  key={tag.id}
                  bg="gray.100"
                  px={2}
                  py={1}
                  borderRadius="sm"
                  fontWeight={600}
                >
                  {tag.name}
                </WrapItem>
              )
            })}
            {frontmatter.regions.map((region) => {
              return (
                <WrapItem
                  key={region}
                  bg="gray.100"
                  px={2}
                  py={1}
                  borderRadius="sm"
                  fontWeight={600}
                >
                  {region}
                </WrapItem>
              )
            })}
          </Wrap>
        </Stack>
        <Stack spacing={3} pb={20}>
          <MDXRemote {...source} components={mdxComponents}>
            {"Best practice"}
          </MDXRemote>
        </Stack>
      </Stack>
    </SimpleGrid>
    <CallToAction />
    </Stack>
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

  const { frontmatter } = source

  const framework = await getFramework()

  const relevantTaskforceIds = frontmatter.b20_action.map((d) => d.slice(0, 2))
  const relevantRecommendationIds = frontmatter.b20_action.map((d) =>
    d.slice(0, 4)
  )

  const tags = framework
    .filter((taskforce) => relevantTaskforceIds.includes(taskforce.id))
    .flatMap((taskforce) => {
      const relevantRecommendations = taskforce.items.filter((d) =>
        relevantRecommendationIds.includes(d.id)
      )
      const relevantActions = relevantRecommendations.flatMap(
        (recommendation) =>
          recommendation.items.filter((action) =>
            frontmatter.b20_action.includes(action.id)
          )
      )
      return [taskforce, ...relevantRecommendations, ...relevantActions]
    })
    .filter((d) => d.type === "taskforce")

  return {
    props: { source, slug, pages, tags },
  }
}
