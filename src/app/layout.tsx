import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "jeonghoy",
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
    <html lang="en" className={`${inter.className}`}>
      <body className="bg-[#ffffff] text-black text-[16px] min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="flex justify-center px-5 py-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
