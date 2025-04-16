import React from "react"
import Image from "next/image"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(".md", ""),
    }
  })
}

const works = [
  { title: "Goznuk", timeline: "WIP", link: "" },
  {
    title: "AWS Security Monitoring System",
    timeline: "2025",
    link: "https://github.com/jeonghoyang12/security-monitoring-project",
  },
  {
    title: "Blog with Notion",
    timeline: "2024",
    link: "https://github.com/jeonghoyang12/my-blog",
  },
]

const exprs = [
  {
    company: "ShinwooTNS",
    title: "Cloud Security Engineering Intern",
    timeline: "2022 - 2023",
    description:
      "Implemented cloud security solutions and managed VPN systems for a global logistics company.",
  },
  {
    company: "McKinley Rice",
    title: "Software Developer Intern",
    timeline: "2019 - 2020",
    description:
      "Engineered Full-Stack web app for e-commerce and dating platforms using Django and React.",
  },
]

const posts = getPosts()

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16 max-w-[500px] w-full text-[18px] font-normal tracking-[-0.35px]">
      <div className="flex items-center gap-x-3">
        <Image
          src="/images/photo.png"
          alt="jeongho yang"
          width={128}
          height={128}
          className="w-10 h-10 rounded-full object-cover"
          unoptimized
        />
        <h2 className="font-semibold text-[24px] text-opacity-100 tracking-tighter">
          Kevin Jeongho Yang
        </h2>
      </div>
      <div className="flex flex-col gap-y-5 text-[#111111] text-opacity-50 mb-8">
        <p>
          I develop secure digital solutions focusing on{" "}
          <span className="text-[#111111] text-opacity-100">cybersecurity</span>
          <br />
          and{" "}
          <span className="text-[#111111] text-opacity-100">web technologies.</span>
        </p>
        <p>
          Currently pursuing{" "}
          <span className="text-[#111111] text-opacity-100">
            B.S. in computer science
          </span>{" "}
          with
          <br /> a specialization of{" "}
          <span className="text-[#111111] text-opacity-100">cybersecurity</span> at
          BGSU.
        </p>
      </div>

      {/* Experiences */}
      <div className="flex flex-col gap-y-5 mb-8">
        <h2 className="font-semibold text-[#111111] text-opacity-30 tracking-[2px] text-[16px]">
          EXPERIENCE
        </h2>
        {exprs.map((expr, index) => (
          <div key={index}>
            <div className="flex items-center gap-x-2">
              <span>
                {expr.company}
              </span>
              <span className="text-black text-opacity-25">
                {" "}
                {expr.timeline}
              </span>
            </div>
            <span className="text-black text-opacity-50">
              {expr.description}
            </span>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-y-5 mb-8">
        <h2 className="font-semibold text-[#111111] text-opacity-30 tracking-[2px] text-[16px]">
          PROJECTS
        </h2>
        {works.map((work, index) =>
          work.timeline === "WIP" ? (
            <div key={index} className="flex items-center gap-x-2">
              <span>{work.title}</span>
              <span className="text-[#111111] text-opacity-25"> WIP</span>
            </div>
          ) : (
            <Link key={index} href={work.link}>
              <div className="flex items-center gap-x-2">
                <span className="text-[#111111] hover:text-opacity-50">
                  {work.title}
                </span>
                <span className="text-[#111111] text-opacity-25">
                  {" "}
                  {work.timeline}
                </span>
              </div>
            </Link>
          )
        )}
      </div>

      {/* Writings */}
      <div className="flex flex-col gap-y-5 mb-8">
        <h2 className="font-semibold text-black text-opacity-30 tracking-[2px] text-[16px]">
          WRITINGS
        </h2>
        {posts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`}>
            <div className="flex items-center gap-x-2">
              <span className="text-[#111111] hover:text-opacity-50">
                {post.title}
              </span>
              <span className="text-[#111111] text-opacity-25"> {post.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold">Let&apos;s get in touch :)</h2>
        <div className="flex gap-x-3">
          <Link
            href="mailto:wjdwjdgh6998@gmail.com"
            className="text-[#111111] text-opacity-50 hover:text-opacity-25 border-b-[1px]"
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeongho-yang/"
            className="text-[#111111] text-opacity-50 hover:text-opacity-25 border-b-[1px]"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/jeonghoyang12"
            className="text-[#111111] text-opacity-50 hover:text-opacity-25 border-b-[1px]"
          >
            Github
          </Link>
          <Link
            href="/jeongho_yang_resume_pages.pdf"
            className="text-[#111111] text-opacity-50 hover:text-opacity-25 border-b-[1px]"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
