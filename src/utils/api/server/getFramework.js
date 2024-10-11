import { readFile } from "fs/promises"
import { join } from "path"

export default async function getPages() {
  const framework = await readFile(
    join(process.env.PWD, "public", "framework.json"),
    "utf8"
  ).then((d) => JSON.parse(d.trim()))

  return framework
}
