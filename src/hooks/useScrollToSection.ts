'use client'

export function useScrollToSection() {
  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) {
      // sectionId가 null이면 페이지 맨 위로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return { scrollToSection }
}

