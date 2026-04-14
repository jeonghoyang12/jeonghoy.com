import { getPost } from "@/lib/posts"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import Image from "next/image"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPost(slug)

  return (
    <div className="flex flex-col gap-y-6 max-w-[600px] w-full text-[16px] pt-20 pb-20">
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold text-[24px] tracking-tight">
          {post.title}
        </h1>
        <span className="text-[#888888] text-[14px]">{post.date}</span>
      </div>

      {/* Markdown Content */}
      <div className="w-full text-[#ededed]">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ ...props }) => (
              <h2
                {...props}
                className="font-semibold text-[18px] mt-8 mb-3 text-[#ededed]"
              />
            ),
            h3: ({ ...props }) => (
              <h3
                {...props}
                className="font-semibold text-[16px] mt-6 mb-2 text-[#ededed]"
              />
            ),
            p: ({ node, ...props }) => {
              // Check if paragraph contains only an image
              const hasOnlyImage =
                node?.children?.length === 1 &&
                node?.children[0]?.type === "element" &&
                node?.children[0]?.tagName === "img"

              if (hasOnlyImage) {
                return <div className="flex -mx-32 my-4">{props.children}</div>
              }

              return (
                <p
                  {...props}
                  className="mb-4 mt-0 leading-relaxed text-[#b0b0b0] text-[16px]"
                />
              )
            },
            ul: ({ ...props }) => (
              <ul
                {...props}
                className="list-disc ml-5 mb-4 mt-0 leading-relaxed text-[#b0b0b0] text-[16px]"
              />
            ),
            ol: ({ ...props }) => (
              <ol
                {...props}
                className="list-decimal ml-5 mb-4 mt-0 leading-relaxed text-[#b0b0b0] text-[16px]"
              />
            ),
            li: ({ ...props }) => <li {...props} className="mb-1" />,
            a: ({ ...props }) => (
              <a
                {...props}
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px] border-[#888888]"
              />
            ),
            u: ({ ...props }) => (
              <u
                {...props}
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-2 no-underline"
              />
            ),
            code: ({ ...props }) => (
              <code
                {...props}
                className="bg-[#0a0a0a] px-1.5 py-0.5 rounded text-[13px] text-[#ededed]"
              />
            ),
            strong: ({ ...props }) => (
              <strong {...props} className="font-semibold text-[#ededed]" />
            ),
            img: ({ ...props }) => (
              <Image
                src={props.src || ""}
                alt={props.alt || ""}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            ),
            em: ({ ...props }) => (
              <em
                {...props}
                className="text-[#888888] text-[14px] not-italic block mt-2 mb-6 text-center"
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
