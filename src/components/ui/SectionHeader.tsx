interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({title} : SectionHeaderProps) {
  return (
    <div className="border-b
                dark:border-white">
      <p className="text-h3 font-semibold my-2
              dark:text-white">{title}</p>
    </div>
  )
}