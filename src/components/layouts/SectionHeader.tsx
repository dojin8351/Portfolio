interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="w-full border-b border-gray-300 dark:border-white">
      <p className="my-2 text-lg font-semibold sm:text-xl md:text-h3 dark:text-white">{title}</p>
    </div>
  )
}
