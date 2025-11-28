import React from "react"

interface ProjectDetailFieldProps {
  label: string
  children: React.ReactNode
  className?: string
  labelClassName?: string
  contentClassName?: string
}

export default function ProjectDetailField({
  label,
  children,
  className = "",
  labelClassName = "",
  contentClassName = "",
}: ProjectDetailFieldProps) {
  return (
    <div className={className}>
      <p className={`mb-2 text-gray-400 dark:text-gray-500 ${labelClassName}`}>
        {label}
      </p>
      <div
        className={`text-sm text-gray-700 dark:text-gray-300 ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  )
}

