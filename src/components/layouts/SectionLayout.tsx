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
      className={`min-h-screen w-full self-stretch px-4 py-10 sm:px-6 md:px-8 lg:px-16 ${className}`}
    >
      {title && <SectionHeader title={title} />}
      {children}
    </div>
  )
}
