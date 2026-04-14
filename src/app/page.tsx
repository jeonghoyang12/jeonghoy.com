import React from "react"
import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(".md", ""),
    }
  })

  // Sort by date in descending order (newest first)
  return posts.sort((a, b) => {
    const dateA = parseInt(a.date)
    const dateB = parseInt(b.date)
    return dateB - dateA
  })
}

const posts = getPosts()

export default function Home() {
  return (
    <div className="flex flex-col max-w-[600px] w-full text-[16px] font-normal tracking-[-0.35px] min-h-screen justify-between pt-20 pb-8">
      <div className="flex flex-col gap-y-5">
        <div>
          <div className="flex items-center gap-x-3">
            <Image
              src="/images/photo.png"
              alt="jeongho yang"
              width={128}
              height={128}
              className="w-11 h-11 rounded-full object-cover"
              unoptimized
            />
            <h1 className="font-semibold text-[24px] tracking-tight">
              Jeongho Yang
            </h1>
          </div>

          <div className="flex flex-col gap-y-4 mt-5 text-[16px] text-[#b0b0b0] leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="text-[#ededed]">computer science</span> student
              at BGSU, specializing in{" "}
              <span className="text-[#ededed]">cybersecurity</span>, a field
              I&apos;ve grown increasingly passionate about the deeper I go into
              it.
            </p>
            <p>
              Along the way, I got to build full-stack web apps for real
              products at
              <span className="text-[#ededed]">&nbsp;McKinley Rice</span>, then
              shifted into cloud security at{" "}
              <span className="text-[#ededed]">&nbsp;ShinwooTNS</span>, handling
              VPN systems and security infrastructure for a global logistics
              company.{" "}
              <Link
                href="/about"
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px]"
              >
                More about me.
              </Link>
            </p>
            <p>
              Every project teaches me something new, and I try to write it all
              down. Here&apos;s what I&apos;ve covered:{" "}
            </p>
          </div>

          <ul className="flex flex-col gap-y-3 list-disc ml-5 mt-4">
            {posts.map((post, index) => (
              <li key={index}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-x-2"
                >
                  <span className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px]">
                    {post.title}
                  </span>
                  <span className="text-[#888888]"> {post.date}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-y-4 mt-5 text-[16px] text-[#b0b0b0] leading-relaxed">
            <p>
              I&apos;m always open to a conversation. You can find me{" "}
              <Link
                href="https://www.linkedin.com/in/jeongho-yang/"
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px] border-[#888888]"
              >
                online
              </Link>
              , browse my{" "}
              <Link
                href="https://github.com/jeonghoyang12"
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px] border-[#888888]"
              >
                code
              </Link>
              , or just send me an{" "}
              <Link
                href="mailto:wjdwjdgh6998@gmail.com"
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px] border-[#888888]"
              >
                email
              </Link>
              . If you are curious about my background, you can also check out
              my{" "}
              <Link
                href="/jeongho_yang_resume.pdf"
                className="text-[#ededed] hover:text-[#b0b0b0] border-b-[1px] border-[#888888]"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
