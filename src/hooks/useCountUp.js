import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 * Used by the CustomerStats section for animated counters.
 */
export function useCountUp(end, { duration = 1500, decimals = 0 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = null
    let frameId

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const current = progress * end
      setValue(Number(current.toFixed(decimals)))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, end, duration, decimals])

  return { ref, value }
}
