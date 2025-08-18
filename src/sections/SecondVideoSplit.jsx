import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const SecondVideoSplit = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%', // 200% scroll for the section
          scrub: true,
          pin: true
        }
      })

      videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 2,
          ease: 'power1.inOut',
        },
        '<'
      )
    }

      // added delay before content animates in
      tl.to({}, { duration: 0.5 })
      tl.from(contentRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerStyle = {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden'
  }
  const colStyle = { flex: '1 1 50%', position: 'relative' }
  const videoStyle = { width: '100%', height: '100%', padding: '20%', objectFit: 'cover', display: 'block' }
  const contentBoxStyle = {
    padding: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fafafa', // near-white for dark background
    height: '100%',
    boxSizing: 'border-box'
  }
  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    lineHeight: 1.05,
    margin: 0,
    color: 'inherit'
  }
  const descStyle = {
    fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
    marginTop: '1rem',
    color: 'rgba(255,255,255,0.95)'
  }

  return (
    <section ref={sectionRef} style={containerStyle} className="second-video-split">
      <div style={colStyle} className="col video">
        <video
          style={videoStyle}
          ref={videoRef}
          src="/videos/output_3.mp4"
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <div style={colStyle} className="col content">
        <div ref={contentRef} style={contentBoxStyle}>
          <div>
            <h2 style={headingStyle}>Heading for this section</h2>
            <p style={descStyle}>
              Descriptive content that appears with a delay while the section is pinned and
              scrolls across a 200% duration. Replace with your actual copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondVideoSplit
