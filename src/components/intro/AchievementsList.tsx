'use client'

import { Achievement } from '@/types/aboutMe'

interface AchievementsListProps {
  achievements: Achievement[]
}

export default function AchievementsList({
  achievements,
}: AchievementsListProps) {
  return (
    <div className="w-full max-w-sm space-y-6">
      <h3 className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-widest border-b border-gray-300 dark:border-gray-800 pb-2">
        Achievements & Education
      </h3>
      <div className="space-y-4">
        {achievements.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start group">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.type === 'award' ? 'bg-yellow-500' : 'bg-gray-500 dark:bg-gray-600'
                  }`}
                ></span>
                <h4 className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-500 pl-3.5 mt-1">
                {item.organization && `${item.organization} — `}
                {item.description}
              </p>
            </div>
            {item.date && (
              <span className="text-xs text-gray-500 dark:text-gray-600 whitespace-nowrap ml-4">
                {item.date}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
