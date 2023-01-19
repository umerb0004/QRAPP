import { useEffect, useState } from 'react'

export function Expire ({ href }) {
  const [visited, setVisited] = useState(false)

  useEffect(() => {
    if (!visited) {
      const timeoutId = setTimeout(() => {
        setVisited(true)
      }, 1000 * 60 ) 

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [visited])

  return visited ? (
    <span>Link expired</span>
  ) : (
    <a href={href} onClick={() => setVisited(true)}>
    </a>
  )
}
