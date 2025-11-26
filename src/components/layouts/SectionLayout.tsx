import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

interface SectionLayoutProps {
  title: string
  children: React.ReactNode
}

export default function SectionLayout({title, children} : SectionLayoutProps) {
  return (
    <div className={'mt-10 w-full self-stretch mb-10'}>
      <SectionHeader title={title}/>
      {children}
    </div>
  )
}