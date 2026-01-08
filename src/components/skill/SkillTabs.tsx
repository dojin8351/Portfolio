"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SkillsCard from "@/components/skill/SkillsCard"
import { cn } from "@/lib/utils"
import { useDarkMode } from "@/hooks/useDarkMode"
import { getActiveItemStyle } from "@/utils/activeItemStyle"
import { SkillType } from "@/types/competency"

interface SkillTabsProps {
  skillInfo: SkillType[]
}

export default function SkillTabs({ skillInfo }: SkillTabsProps) {
  const tabKeys = ["ALL", "Frontend", "Backend", "DevOps", "Tools"]
  const [activeTab, setActiveTab] = useState("all")
  const isDark = useDarkMode()

  const getActiveStyle = (tabValue: string) => {
    if (activeTab !== tabValue) return {}
    return getActiveItemStyle(isDark)
  }

  return (
    <div className="w-full">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex w-full flex-col gap-4 sm:flex-row sm:items-start"
      >
        <TabsList className="flex w-full flex-row gap-1 overflow-hidden border border-gray-200 bg-white p-1.5 px-3 sm:h-auto sm:w-auto sm:flex-col sm:gap-1 sm:p-2 sm:px-3 dark:bg-gray-700">
          {tabKeys.map((key) => {
            const tabValue = key.toLowerCase()
            return (
              <TabsTrigger
                key={key}
                value={tabValue}
                className={cn(
                  "my-1.5 flex-1 cursor-pointer transition-all duration-300 sm:w-full sm:flex-none",
                  activeTab === tabValue &&
                    "relative scale-[1.02] rounded-full px-1.5 py-1"
                )}
                style={getActiveStyle(tabValue)}
              >
                {key}
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className="w-full sm:flex-1">
          {tabKeys.map((key) => (
            <TabsContent key={key} value={key.toLowerCase()} className="w-full">
              <SkillsCard skillInfo={skillInfo} filter={key} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
