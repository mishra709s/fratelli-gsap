import React, { useEffect } from 'react'
import { Lenis, useLenis } from 'lenis/react'

// LenisProvider: use the official React wrapper and manage html classes
export default function LenisProvider({ children }) {
  // device-aware options: use gentler tuning on touch devices for smoother feel
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const mobileOptions = {
    smooth: true,
    direction: 'vertical',
    autoRaf: true,
    // increase duration for slower, smoother interpolation on touch
    duration: 1.75,
    smoothTouch: true,
    // reduce multiplier so one finger swipe moves less distance (smoother)
    touchMultiplier: 1.5,
    // enable syncTouch to mimic native touch inertia (helps on newer iOS)
    syncTouch: true,
    syncTouchLerp: 0.08,
    smoothWheel: false,
    wheelMultiplier: 1.0,
  }

  const desktopOptions = {
    smooth: true,
    direction: 'vertical',
    autoRaf: true,
    duration: 1.75,
    smoothTouch: true,
    touchMultiplier: 3.2,
    smoothWheel: true,
    wheelMultiplier: 2.0,
  }

  const options = isTouch ? mobileOptions : desktopOptions

  return (
    <Lenis root options={options}>
      <LenisSetup />
      {children}
    </Lenis>
  )
}

function LenisSetup() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    const html = document.documentElement
    html.classList.add('lenis', 'lenis-smooth')

    let scrollingTimeout
    const onScroll = () => {
      html.classList.add('lenis-scrolling')
      if (scrollingTimeout) clearTimeout(scrollingTimeout)
      scrollingTimeout = setTimeout(() => html.classList.remove('lenis-scrolling'), 250)
    }

    if (typeof lenis.on === 'function') lenis.on('scroll', onScroll)
    // expose for debugging
    window.lenis = lenis

    return () => {
      if (typeof lenis.off === 'function') lenis.off('scroll', onScroll)
      html.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling')
      delete window.lenis
      if (scrollingTimeout) clearTimeout(scrollingTimeout)
    }
  }, [lenis])

  return null
}
