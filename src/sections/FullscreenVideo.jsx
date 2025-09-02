import { useRef, useEffect } from 'react'
import LenisProvider from '../setup/LenisProvider.jsx'

const FirstVideo = ({ src, className }) => {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const canvasRef = useRef(null)
  const videoRef = useRef(null)

  // How long to pin/scrub: 250vh ≈ GSAP end:'+=250%'
  const TRACK_VH = 250
  const STEP = 1 / 30 // 30fps quantization
  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const canvas = canvasRef.current
    const video = videoRef.current
    if (!section || !pin || !canvas || !video) return

    let duration = 0
    let startY = 0
    let endY = 0
    let seeking = false
    let pending = null
    let rAF = 0

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true })

    // ----- PINNING (sticky + hard fixed fallback) -----
    const setAbsoluteAt = (y) => {
      pin.style.position = 'absolute'
      pin.style.top = `${y}px`
      pin.style.left = '0'
      pin.style.right = '0'
      pin.style.height = '100vh'
      pin.style.width = '100%'
    }
    const setFixedTop = () => {
      pin.style.position = 'fixed'
      pin.style.top = '0'
      pin.style.left = '0'
      pin.style.right = '0'
      pin.style.height = '100vh'
      pin.style.width = '100%'
    }
    const updatePin = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.top > 0) { setAbsoluteAt(0); return }
      if (rect.bottom <= vh) { setAbsoluteAt(section.offsetHeight - vh); return }
      setFixedTop()
    }

    // ----- MEASURE -----
    const measure = () => {
      const rect = section.getBoundingClientRect()
      const pageY = window.pageYOffset || document.documentElement.scrollTop
      startY = pageY + rect.top
      endY = startY + section.offsetHeight - window.innerHeight
      updatePin()
    }

    // ----- DRAW CURRENT VIDEO FRAME TO CANVAS -----
    const draw = () => {
      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      } catch { /* empty */ }
    }

    // ----- SEEKING PIPELINE (queue latest target while decoding) -----
    const doSeek = (t) => {
      seeking = true
      // Some browsers paint only on 'seeked', so we draw after that event
      try {
        if (typeof video.fastSeek === 'function') video.fastSeek(t)
        else video.currentTime = t
      } catch { seeking = false }
    }

    const onSeeked = () => {
      draw()
      if (pending != null) {
        const next = pending
        pending = null
        doSeek(next)
      } else {
        seeking = false
      }
    }

    // ----- MAP SCROLL -> TIME (strictly 1:1 with scroll) -----
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
    const onScrollTick = () => {
      rAF = 0

      const pageY = window.pageYOffset || document.documentElement.scrollTop
      const prog = (pageY - startY) / Math.max(1, endY - startY) // 0..1
      const p = clamp(prog, 0, 1)
      const tRaw = p * duration
      const t = clamp(Math.round(tRaw / STEP) * STEP, 0, duration - 1e-6)

      if (!seeking) {
        doSeek(t)
      } else {
        pending = t // keep only the latest requested time
      }
      updatePin()
    }

    const onScroll = () => {
      if (!duration) return
      if (!rAF) rAF = requestAnimationFrame(onScrollTick)
    }

    const onResize = () => {
      // Match canvas to video resolution for crisp frames
      canvas.width = video.videoWidth || canvas.clientWidth
      canvas.height = video.videoHeight || canvas.clientHeight
      measure()
      // Draw current frame after resize
      draw()
    }

    const onLoadedMeta = async () => {
      duration = video.duration || 0
      onResize()
      // Warm up decoder so first seeks respond ASAP
      try { await video.play(); video.pause() } catch { /* empty */ }
      // Initial draw at t=0
      doSeek(0)
    }

    // ----- INIT LISTENERS -----
    video.addEventListener('loadedmetadata', onLoadedMeta)
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    // If metadata already ready
    if (video.readyState >= 1) onLoadedMeta()

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMeta)
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rAF) cancelAnimationFrame(rAF)
    }
  }, [])

  return (
    <LenisProvider>
      <section
        ref={sectionRef}
        className={`first-vd-wrapper ${className}`}
        style={{
          position: 'relative',
          height: `${TRACK_VH}vh`, // scroll distance for scrubbing
        }}
      >
        <div
          ref={pinRef}
          className="h-dvh"
          style={{
            position: 'absolute',   // JS toggles absolute/fixed for reliable pin
            top: 0, left: 0, right: 0,
            height: '100vh',
            zIndex: 0,
          }}
        >
          {/* Visible canvas */}
          <canvas
            ref={canvasRef}
            className="first-vd"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
          {/* Hidden decoder video (no painting jank) */}
          <video
            ref={videoRef}
            src={src}
            muted
            playsInline
            preload="auto"
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
          />
        </div>
      </section>
    </LenisProvider>
  )
}

export default FirstVideo
