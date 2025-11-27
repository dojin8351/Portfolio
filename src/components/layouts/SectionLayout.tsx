import React from "react"
import SectionHeader from "@/components/layouts/SectionHeader"

interface SectionLayoutProps {
  title: string
  children: React.ReactNode
  sectionId?: string
}

export default function SectionLayout({
  title,
  children,
  sectionId,
}: SectionLayoutProps) {
  return (
    <div
      id={sectionId}
      className={"mt-10 mb-10 w-full scroll-mt-20 self-stretch"}
    >
      <SectionHeader title={title} />
      {children}
    </div>
  )
}
