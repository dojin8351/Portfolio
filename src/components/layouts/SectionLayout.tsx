import React from "react"
import SectionHeader from "@/components/layouts/SectionHeader"

interface SectionLayoutProps {
  title?: string
  children: React.ReactNode
  sectionId?: string
  className?: string
}

export default function SectionLayout({
  title,
  children,
  sectionId,
  className = "",
}: SectionLayoutProps) {
  return (
    <div
      id={sectionId}
      className={`min-h-screen w-full self-stretch px-3 py-8 sm:px-4 sm:py-10 md:px-6 lg:px-8 xl:px-16 ${className}`}
    >
      {title && <SectionHeader title={title} />}
      {children}
    </div>
  )
}
