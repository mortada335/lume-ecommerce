import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Automatically scrolls window to top (0, 0) on every route navigation.
 * If an anchor hash is present, smoothly scrolls to the target element.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const targetId = hash.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
