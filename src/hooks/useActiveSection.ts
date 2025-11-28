"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const SECTIONS = ["about-me", "competency", "skills", "projects"] as const
const SCROLL_THRESHOLD = 150

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("about-me")
  const isScrollingRef = useRef<boolean>(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sectionVisibilityRef = useRef<Map<string, number>>(new Map())

  const updateActiveSection = useCallback(() => {
    // 프로그래밍 방식 스크롤 중이면 무시
    if (isScrollingRef.current) {
      return
    }

    // 스크롤이 맨 위에 있으면 about-me
    if (window.scrollY < SCROLL_THRESHOLD) {
      setActiveSection("about-me")
      return
    }

    // 가장 많이 보이는 섹션 찾기
    let maxVisibility = 0
    let mostVisibleSection = "about-me"

    sectionVisibilityRef.current.forEach((visibility, sectionId) => {
      if (visibility > maxVisibility) {
        maxVisibility = visibility
        mostVisibleSection = sectionId
      }
    })

    // 최소 가시성이 있어야 활성화 (섹션이 실제로 보일 때만)
    if (maxVisibility > 0.1) {
      setActiveSection(mostVisibleSection)
    }
  }, [])

  useEffect(() => {
    const initializeObserver = () => {
      // 기존 observer 정리
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      // Intersection Observer 설정
      // rootMargin을 사용하여 섹션의 중간 지점에서 감지
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id
            if (sectionId && SECTIONS.includes(sectionId as typeof SECTIONS[number])) {
              // intersectionRatio를 사용하여 섹션이 얼마나 보이는지 계산
              const visibility = entry.intersectionRatio
              sectionVisibilityRef.current.set(sectionId, visibility)
            }
          })
          updateActiveSection()
        },
        {
          root: null,
          rootMargin: "-30% 0px -30% 0px", // 뷰포트 중앙 40% 영역에서 감지
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        }
      )

      // 모든 섹션 관찰 시작
      SECTIONS.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observerRef.current?.observe(element)
          // 초기 가시성 계산
          const rect = element.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(viewportHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibility = visibleHeight / viewportHeight
          sectionVisibilityRef.current.set(sectionId, visibility)
        }
      })

      // 초기 섹션 설정
      updateActiveSection()
    }

    // DOM이 완전히 로드된 후 초기화
    const initializeSection = () => {
      setTimeout(() => {
        initializeObserver()
      }, 150)
    }

    // 페이지 로드 완료 후 초기화
    if (document.readyState === "complete") {
      initializeSection()
    } else {
      window.addEventListener("load", initializeSection)
    }

    // 즉시 초기화 시도
    initializeObserver()

    return () => {
      window.removeEventListener("load", initializeSection)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [updateActiveSection])

  const setActiveSectionWithScrollLock = useCallback(
    (section: string) => {
      setActiveSection(section)
      isScrollingRef.current = true

      // 기존 타임아웃 클리어
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // 스크롤 완료 후 잠금 해제 (스크롤 애니메이션 시간 고려)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
        // 스크롤 완료 후 정확한 섹션 다시 확인
        updateActiveSection()
      }, 800) // 스크롤 애니메이션 완료 대기 시간
    },
    [updateActiveSection]
  )

  return { activeSection, setActiveSection: setActiveSectionWithScrollLock }
}
