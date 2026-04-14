"use client"
import Image from "next/image"
import { useState } from "react"

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col max-w-[600px] w-full text-[16px] font-normal tracking-[-0.35px] pt-20 pb-20">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-3">
          <h1 className="font-semibold text-[24px] tracking-tight">About Me</h1>
        </div>

        <div className="flex flex-col gap-y-4 text-[16px] text-[#b0b0b0] leading-relaxed">
          <p>
            I&apos;ve always been the kind of person who needs to know how
            things actually work, not just that they work.
          </p>

          <div className="flex gap-4 -mx-16 my-4">
            <Image
              src="/images/childhood_1.jpg"
              alt="Childhood photo 1"
              width={800}
              height={600}
              className="w-1/2 h-auto rounded-lg"
              unoptimized
            />
            <Image
              src="/images/childhood_2.jpg"
              alt="Childhood photo 2"
              width={800}
              height={600}
              className="w-1/2 h-auto rounded-lg"
              unoptimized
            />
          </div>

          <p>
            Growing up, I spent most of my time in the pool. From age seven
            through eighth grade, I was a competitive swimmer. It was a lot of
            early mornings and a lot of pressure, and honestly by the end of it
            I was pretty burned out.
          </p>

          <p>
            But looking back, that time shaped a lot of how I approach things
            now. Showing up consistently, even when you don&apos;t feel like it,
            kind of just became second nature.
          </p>

          <p>
            When I took a technology class at school and got introduced to
            coding, I was hooked pretty quickly. What got me wasn&apos;t just
            writing code, it was the fact that I could actually make something
            real with it.
          </p>

          <p>
            I started digging into how hardware works, how software runs, all of
            it. That curiosity eventually led me to study computer science at{" "}
            <span className="text-[#ededed]">
              Bowling Green State University
            </span>
            , where I&apos;m now specializing in cybersecurity.
          </p>

          <div className="flex gap-4 -mx-16 my-4">
            <Image
              src="/images/mckinley.png"
              alt="McKinley Rice photo 1"
              width={800}
              height={600}
              className="w-1/2 h-auto rounded-lg"
              unoptimized
            />
            <Image
              src="/images/mckinley_2.png"
              alt="McKinley Rice photo 2"
              width={800}
              height={600}
              className="w-1/2 h-auto rounded-lg"
              unoptimized
            />
          </div>

          <p>
            Through my internships I got to actually see how the internet works
            from the inside. At{" "}
            <span className="text-[#ededed]">McKinley Rice</span> I built
            full-stack web applications for real products, which gave me a real
            sense of how the things we use every day actually get made.
          </p>

          <p>
            Then at <span className="text-[#ededed]">ShinwooTNS</span> I moved
            into cloud security, working on protecting infrastructure and
            helping distributed teams work remotely in a secure way. That&apos;s
            when it really clicked for me. Everything online was built and is
            being protected by real people, and I want to be one of those people
            on the security side.
          </p>

          <div className="mt-8 border-t border-[#333333] pt-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-x-2 text-[#888888] hover:text-[#b0b0b0] transition-colors"
            >
              <span className="text-[14px]">Extra fun fact</span>
              <span className="text-[12px]">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div className="mt-4 text-[#b0b0b0] leading-relaxed">
                <p>
                  I&apos;m a massive soccer fan, like genuinely obsessed.
                  I&apos;ve been a{" "}
                  <span className="text-[#ededed]">Tottenham Hotspur</span>{" "}
                  supporter for years and I play myself every week, though
                  watching and playing are very different things.
                </p>

                <div className="flex gap-4 -mx-16 my-4">
                  <Image
                    src="/images/soccer_1.JPG"
                    alt="Soccer photo 1"
                    width={800}
                    height={600}
                    className="w-1/2 h-auto rounded-lg"
                    unoptimized
                  />
                  <Image
                    src="/images/soccer_2.png"
                    alt="Soccer photo 2"
                    width={800}
                    height={600}
                    className="w-1/2 h-auto rounded-lg"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
