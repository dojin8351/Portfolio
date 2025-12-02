import React from "react"

interface CompetencyCardProps {
  title: string
  description: string
}

function CompetencyCard({ title, description }: CompetencyCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1">
        <p className="text-base font-semibold sm:text-lg md:text-h5 dark:text-white">{title}</p>
        <p className="mt-2 text-xs text-gray-600 sm:text-sm md:text-base dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default React.memo(CompetencyCard)
