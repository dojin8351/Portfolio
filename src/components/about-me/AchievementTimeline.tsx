import React from "react"
import { Achievement } from "@/types/aboutMe"

interface AchievementTimelineProps {
  achievements: Achievement[]
}

const getTypeLabel = (type: Achievement["type"]) => {
  switch (type) {
    case "certification":
      return "자격증"
    case "education":
      return "교육"
    case "award":
      return "수상"
    default:
      return ""
  }
}

const getTypeIcon = (type: Achievement["type"]) => {
  switch (type) {
    case "certification":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      )
    case "education":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14v7M5.176 11.428l-1.897.493a1 1 0 00-.78 1.188l.5 2.897a1 1 0 001.188.78l2.897-.5M18.824 11.428l1.897.493a1 1 0 01.78 1.188l-.5 2.897a1 1 0 01-1.188.78l-2.897-.5"
          />
        </svg>
      )
    case "award":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      )
  }
}

const getTypeColor = (type: Achievement["type"]) => {
  switch (type) {
    case "certification":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    case "education":
      return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    case "award":
      return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
  }
}

const getTypeGradientColor = (type: Achievement["type"]) => {
  switch (type) {
    case "certification":
      return "bg-blue-500"
    case "education":
      return "bg-green-500"
    case "award":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

export default function AchievementTimeline({
  achievements,
}: AchievementTimelineProps) {
  if (!achievements || achievements.length === 0) {
    return null
  }

  // 타입별로 그룹화
  const groupedAchievements = achievements.reduce(
    (acc, achievement) => {
      if (!acc[achievement.type]) {
        acc[achievement.type] = []
      }
      acc[achievement.type].push(achievement)
      return acc
    },
    {} as Record<Achievement["type"], Achievement[]>
  )

  return (
    <div className="mt-7 w-full border-t border-gray-200 pt-8 dark:border-gray-700">
      <p className="mb-6 text-xl font-semibold text-gray-800 dark:text-gray-200">
        자격증 · 교육 · 수상 이력
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groupedAchievements).map(([type, items]) => (
          <div
            key={type}
            className="group relative isolate overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:hover:border-gray-600"
          >
            {/* 배경 장식 */}
            <div
              className={`absolute -top-8 -right-8 z-0 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20 ${getTypeGradientColor(type as Achievement["type"])}`}
            />

            {/* 헤더 */}
            <div className="relative z-10 mb-4 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${getTypeColor(type as Achievement["type"])} transition-transform group-hover:scale-110`}
              >
                {getTypeIcon(type as Achievement["type"])}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {getTypeLabel(type as Achievement["type"])}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {items.length}개
                </p>
              </div>
            </div>

            {/* 항목 리스트 */}
            <div className="relative z-10 space-y-3">
              {items.map((achievement, index) => (
                <div
                  key={index}
                  className="rounded-lg border-1 border-gray-200 bg-white/50 p-3 transition-all hover:bg-white hover:shadow-sm dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h4 className="flex-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {achievement.title}
                    </h4>
                    <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
                      {achievement.date}
                    </span>
                  </div>
                  {achievement.organization && (
                    <p className="mb-1 text-xs text-gray-600 dark:text-gray-400">
                      {achievement.organization}
                    </p>
                  )}
                  {achievement.description && (
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-500">
                      {achievement.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
