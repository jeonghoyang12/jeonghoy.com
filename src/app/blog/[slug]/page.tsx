import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

const getPost = (slug: string) => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    date: data.date,
    content,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPost(slug)

  return (
    <div className="mx-auto text-[14px] font-light">
      <div className="mb-8">
        <div className="font-medium text-[17px]">{post.title}</div>
        <span className="text-[#A3A3A3] font-light mb-5">
          {post.date}
        </span>
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]} // Allows raw HTML in Markdown
        components={{
          p: ({ ...props }) => (
            <p {...props} className="prose mb-4 mt-4 leading-relaxed" />
          ),
          u: ({ ...props }) => (
            <u
              {...props}
              className="underline hover:text-[#0070f3] transition-colors"
            />
          ), // Underline links
          ul: ({ ...props }) => (
            <ul
              {...props}
              className="list-disc ml-6 mb-4 mt-4 leading-relaxed"
            />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  )
}
