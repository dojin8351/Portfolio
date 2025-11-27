interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="border-b dark:border-white">
      <p className="text-h3 my-2 font-semibold dark:text-white">{title}</p>
    </div>
  )
}
