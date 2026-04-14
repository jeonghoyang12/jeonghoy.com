import type { Metadata } from "next"
import "./globals.css"
import { Lora } from "next/font/google"
import React from "react"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Jeongho Yang",
  description: "Jeongho's Portfolio",
  icons: {
    icon: "/images/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lora.className}>
      <body className="bg-[#171717] text-[#ededed] min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="flex justify-center px-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
