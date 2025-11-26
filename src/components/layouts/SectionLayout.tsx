import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

interface SectionLayoutProps {
  title: string
  children: React.ReactNode
  sectionId?: string
}

export default function SectionLayout({title, children, sectionId} : SectionLayoutProps) {
  return (
    <div id={sectionId} className={'mt-10 w-full self-stretch mb-10 scroll-mt-20'}>
      <SectionHeader title={title}/>
      {children}
    </div>
  )
}