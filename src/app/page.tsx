"use client"
import React from "react"
import Link from "next/link"
// import { ArrowUpRight } from "@phosphor-icons/react"

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
  },
  {
    company: "McKinley Rice",
    title: "Software Engineering Intern",
    timeline: "Dec 2019 - Jun 2020",
  },
]

export default function Home() {
  return (
    <div>
      <div className="font-semibold mb-1">Jeongho Yang</div>
      <div className="text-[#616161] font-light text-[14px] mb-7">
        Security Engineer with focus on threat intelligence and digital
        infrastructure protection.
      </div>
      <div className="mb-7 font-light text-[14px]" style={{ lineHeight: 1.7 }}>
        I&apos;m currently pursuing BS in Computer Science with a specialization
        of Cybersecurity / Digital Forensics at Bowling Green State University.
        My background in both software development and security gives me a
        unique perspective on how to build and protect digital systems.
      </div>
      <div className="font-light text-[14px]" style={{ lineHeight: 1.7 }}>
        My experience includes implementing security solutions for large
        companies with global operations and setting up cloud security on
        platforms like AWS and Azure. I&apos;m committed to developing effective
        ways to guard against data leaks and security threats.
      </div>
      <div className="border-t border-neutral-300 py-3 mt-9" />

      {/* Experience */}
      <div className="mt-6 text-[14px]">
        <div className="font-medium mb-2 text-[15px]">Experience</div>
        {exprs.map((expr, index) => (
          <div
            key={index}
            className={`flex justify-between py-3 font-light ${
              index < exprs.length - 1 ? "border-b border-neutral-200" : ""
            }`}
          >
            <div>
              <span>{expr.company}</span>
              <span> / {expr.title}</span>
            </div>
            <span>{expr.timeline}</span>
          </div>
        ))}
      </div>

      {/* Work (Side Projects) */}
      <div className="mt-12 text-[14px]">
        <div className="font-medium mb-2 text-[15px]">Work</div>
        {works.map((work, index) =>
          work.timeline === "WIP" ? (
            <div
              key={index}
              className={`flex justify-between py-3 font-light ${
                index < works.length - 1 ? "border-b border-neutral-150" : ""
              }`}
            >
              <span className="text-[#A3A3A3]">{work.title}</span>
              <span className="text-[#A3A3A3]">WIP</span>
            </div>
          ) : (
            <Link
              key={index}
              href={work.link}
              className="hover:text-[#0070f3] transition-colors"
            >
              <div
                className={`flex justify-between py-3 font-light ${
                  index < works.length - 1 ? "border-b border-neutral-200" : ""
                }`}
              >
                <span>{work.title}</span>
                <span>{work.timeline}</span>
              </div>
            </Link>
          )
        )}
      </div>

      {/* Writing (Blogs) */}
      {/* <div className="mt-12 mb-12 text-[14px]">
        <div className="font-medium mb-2 text-[15px]">Writing</div>
        <div className="flex justify-between py-3 font-light">
          <span className="text-[#A3A3A3]">Coming soon...</span>
        </div>
      </div> */}
    </div>
  )
}
