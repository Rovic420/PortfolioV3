"use client"
import { useEffect } from "react"

const ScrollbarManager = () => {
  useEffect(() => {
    let scrollTimeout

    const showScrollbar = () => {
      document.documentElement.style.setProperty("--scrollbar-opacity", "0.6")
    }

    const hideScrollbar = () => {
      document.documentElement.style.setProperty("--scrollbar-opacity", "0")
    }

    const handleScroll = () => {
      showScrollbar()
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(hideScrollbar, 1500)
    }

    // Initialize with hidden scrollbar
    hideScrollbar()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return null
}

export default ScrollbarManager
