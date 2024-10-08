import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { csvParse } from "d3-dsv"
import _groupBy from "lodash/groupBy.js"

import convertFromBuffer from "../src/utils/convertFromBuffer.js"

const bestPractices = await readFile(
  join(process.env.PWD, "content", "best-practices.txt"),
  "utf8"
).then((content) => {
  const parsed = JSON.parse(
    convertFromBuffer(content.trim().split("").reverse().join(""))
  )
  return parsed.pages
    .map((page) => ({ ...page.frontmatter }))
    .filter((d) => d.b20_action)
})

const framework = await readFile(
  join(process.env.PWD, "content", "framework.csv"),
  "utf8"
).then((csvData) => csvParse(csvData.trim()))

const parsedFramework = Object.entries(
  _groupBy(framework, (o) => o.id.slice(0, 2))
).map(([taskforceId, items]) => {
  const taskforce = items.find((s) => s.id === taskforceId)
  const parsedItems = Object.entries(_groupBy(items, (o) => o.id.slice(2, 4)))
    .filter((d) => d[0])
    .map(([recommendationId, items]) => {
      const id = taskforceId + recommendationId
      const recommendation = items.find((s) => s.id === id)
      const parsedItems = items
        .filter((d) => d.id !== id)
        .map((d) => {
          const items = bestPractices
            .filter((s) => s.b20_action?.includes(d.id))
            .map((d) => ({
              title: d.title,
              description: d.description,
              regions: d.regions,
              b20_action: d.b20_action,
              date: d.date,
              author: d.author,
              slug: join("/", d.slug.split("/").pop()),
            }))
          return { ...d, type: "action", items }
        })
      return { ...recommendation, type: "recommendation", items: parsedItems }
    })
  return {
    ...taskforce,
    type: "taskforce",
    items: parsedItems,
  }
})

await writeFile(
  join(process.env.PWD, "public", "framework.json"),
  JSON.stringify(parsedFramework),
  "utf8"
)
