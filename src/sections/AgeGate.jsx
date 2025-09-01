import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AgeGate = ({ onConfirm }) => {
  const containerRef = useRef(null)
  const glassRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.to('.nav-title', { color: "#8E1C21" });
    gsap.to('.nav-icon', { color: "#8E1C21" });
  }, []);

  const handleYes = () => {
    // scale glass to reveal the background fully and fade out content,
    // then notify parent that age is confirmed
    const tl = gsap.timeline({ onComplete: () => onConfirm && onConfirm() })
    tl.to(glassRef.current, { scale: 3, duration: 1.2, ease: 'power3.out' }, 0)
    tl.to(contentRef.current, { autoAlpha: 0, duration: 0.6 }, 0)
    gsap.set('.nav-title', { color: "white" });
    gsap.set('.nav-icon', { color: "white" });
    gsap.set('.nav-wrapper', { background: "transparent" });
  }

  const handleNo = () => {
    // simple shake or fade to indicate negative response
    gsap.fromTo(contentRef.current, { x: -6 }, { x: 6, duration: 0.08, yoyo: true, repeat: 4 })
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Full-width/height background image */}
      <img
        src="/images/Flow_5.png"
        alt="Flow background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glass overlay positioned absolutely - full size SVG */}
      <div className="absolute right-0 left-0 bottom-0 flex items-center justify-center pointer-events-none">
        <img
          ref={glassRef}
          src="/images/GlassImage.svg"
          alt="Glass overlay"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', transformOrigin: '50% 50%' }}
        />
      </div>

      {/* Centered content */}
      <div
        ref={contentRef}
        className="absolute mt-30 inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        style={{ gap: '20px' }}
      >
        <div className="text-white" style={{ fontSize: '28px', maxWidth: '60%' }}>
          Are you of legal drinking age in your country?
        </div>

        <div className="flex gap-6">
          <button
            onClick={handleYes}
            className="py-3 px-8 rounded border border-white bg-white text-black font-semibold"
          >
            Yes
          </button>

          <button
            onClick={handleNo}
            className="py-3 px-8 rounded border border-white bg-transparent text-white font-semibold"
          >
            No
          </button>
        </div>
      </div>
    </section>
  )
}

export default AgeGate
