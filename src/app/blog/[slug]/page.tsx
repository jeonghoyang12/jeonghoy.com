import { getPost } from "@/lib/posts"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPost(slug)

  return (
    <div className="flex flex-col gap-y-5 max-w-[500px] w-full text-[14px] font-[300]">
      <div>
        <h1 className="font-bold text-[16px]">{post.title}</h1>
        <span className="text-black text-opacity-50 mb-5">{post.date}</span>
      </div>

      {/* Markdown Content */}
      <div className="w-full">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]} // Allows raw HTML in Markdown
          components={{
            p: ({ ...props }) => (
              <p {...props} className="prose mb-4 mt-4 leading-relaxed" />
            ),
            u: ({ ...props }) => (
              <u
                {...props}
                className="text-black hover:text-opacity-60 border-b-2 no-underline"
              />
            ), // Underline links
            ul: ({ ...props }) => (
              <ul
                {...props}
                className="list-disc ml-6 mb-4 mt-4 leading-relaxed"
              />
            ),
            img: ({ ...props }) => (
              <img
                {...props}
                className="w-[120%] -ml-[10%] max-w-none h-auto border border-gray-300 rounded-lg shadow-lg"
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
