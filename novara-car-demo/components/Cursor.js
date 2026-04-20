import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = `${mx}px`
      cursor.style.top = `${my}px`
    }

    let ringRaf = 0
    const animateRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      ringRaf = requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMove)
    ringRaf = requestAnimationFrame(animateRing)

    const interactive = document.querySelectorAll('a, button')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '16px'
        cursor.style.height = '16px'
        ring.style.width = '52px'
        ring.style.height = '52px'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'
        cursor.style.height = '10px'
        ring.style.width = '36px'
        ring.style.height = '36px'
      })
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(ringRaf)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
