import React from "react"
import SectionHeader from "@/components/layouts/SectionHeader"

interface SectionLayoutProps {
  title?: string
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
      className={"mb-10 h-screen w-full scroll-mt-10 self-stretch"}
    >
      {title && <SectionHeader title={title} />}
      {children}
    </div>
  )
}
