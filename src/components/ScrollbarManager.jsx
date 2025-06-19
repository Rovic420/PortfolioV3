"use client"
import { useEffect } from "react"

const ScrollbarManager = () => {
  useEffect(() => {
    let scrollTimeout
    let isScrolling = false

    const showScrollbar = () => {
      if (!isScrolling) {
        isScrolling = true
        document.documentElement.style.setProperty("--scrollbar-opacity", "0.6")
      }
    }

    const hideScrollbar = () => {
      isScrolling = false
      document.documentElement.style.setProperty("--scrollbar-opacity", "0")
    }

    const handleScroll = () => {
      showScrollbar()

      // Clear existing timeout
      clearTimeout(scrollTimeout)

      // Hide scrollbar after 1.5 seconds of no scrolling
      scrollTimeout = setTimeout(hideScrollbar, 1500)
    }

    // Initialize with hidden scrollbar
    hideScrollbar()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Show scrollbar on mouse move near the edge (for better UX)
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth
      if (e.clientX > windowWidth - 20) {
        showScrollbar()
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(hideScrollbar, 2000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return null
}

export default ScrollbarManager
