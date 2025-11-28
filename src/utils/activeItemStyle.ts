import type { CSSProperties } from "react"

export function getActiveItemStyle(isDark: boolean): CSSProperties {
  if (isDark) {
    return {
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.35) 50%, rgba(59, 130, 246, 0.25) 100%)",
      boxShadow: `
        inset 0 1px 3px rgba(255, 255, 255, 0.2),
        inset 0 -1px 2px rgba(0, 0, 0, 0.3),
        0 4px 16px rgba(59, 130, 246, 0.4),
        0 0 0 1px rgba(96, 165, 250, 0.5)
      `,
      backdropFilter: "blur(12px)",
    }
  }

  return {
    background:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.25) 50%, rgba(59, 130, 246, 0.15) 100%)",
    boxShadow: `
      inset 0 1px 2px rgba(255, 255, 255, 0.4),
      inset 0 -1px 2px rgba(0, 0, 0, 0.1),
      0 4px 12px rgba(59, 130, 246, 0.3),
      0 0 0 1px rgba(147, 197, 253, 0.4)
    `,
    backdropFilter: "blur(12px)",
  }
}

