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
    timeline: "Aug 2022 - Aug 2023",
    description:
      "Implemented cloud security solutions and managed VPN systems for a global logistics company.",
  },
  {
    company: "McKinley Rice",
    title: "Software Developer Intern",
    timeline: "Dec 2019 - Jun 2020",
    description:
      "Developed e-commerce and dating platforms using Django and React.",
  },
]

const posts = getPosts()

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 max-w-[500px] w-full text-[14px] font-light">
      <div className="flex items-center gap-x-3">
        <Image
          src="/images/photo.png"
          alt="jeongho yang"
          width={128}
          height={128}
          className="w-10 h-10 rounded-full object-cover"
          unoptimized
        />
        <h1 className="font-bold text-[17px]">Jeongho Yang</h1>
      </div>
      <p>I&apos;m a security engineer based in Ohio, USA.</p>
      <p>
        I&apos;m currently pursuing B.S. in computer science with a
        specialization of cybersecurity at BGSU. My background includes
        internship experience in cloud security and software development.
      </p>

      {/* Experiences */}
      <div className="flex flex-col gap-y-5">
        <h2 className="font-semibold">Experience</h2>
        {exprs.map((expr, index) => (
          <div key={index}>
            <div>
              <span className="font-normal">{expr.company}</span>
              <span className="text-black text-opacity-50">
                {" "}
                {expr.timeline}
              </span>
            </div>
            <span className="font-light">{expr.description}</span>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold">Projects</h2>
        {works.map((work, index) =>
          work.timeline === "WIP" ? (
            <div key={index}>
              <span className="text-black text-opacity-50">{work.title}</span>
              <span className="text-black text-opacity-50"> WIP</span>
            </div>
          ) : (
            <Link
              key={index}
              href={work.link}
              className="hover:text-[#0070f3] transition-colors"
            >
              <div>
                <span>{work.title}</span>
                <span className="text-black text-opacity-50">
                  {" "}
                  {work.timeline}
                </span>
              </div>
            </Link>
          )
        )}
      </div>

      {/* Writings */}
      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold">Writings</h2>
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="hover:text-[#0070f3] transition-colors"
          >
            <div>
              <span>{post.title}</span>
              <span className="text-black text-opacity-50"> {post.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold">Get in touch :)</h2>
        <div className="flex gap-x-3">
          <Link
            href="mailto:wjdwjdgh6998@gmail.com"
            className="text-black text-opacity-50 hover:text-opacity-80 underline"
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/jeongho-yang/"
            className="text-black text-opacity-50 hover:text-opacity-80 underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/jeonghoyang12"
            className="text-black text-opacity-50 hover:text-opacity-80 underline"
          >
            Github
          </Link>
          <Link
            href="/jeongho_yang_resume_pages.pdf"
            className="text-black text-opacity-50 hover:text-opacity-80 underline"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
