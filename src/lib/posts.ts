import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const getPost = (slug: string) => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    date: data.date,
    content,
  }
}