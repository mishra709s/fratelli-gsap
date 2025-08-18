import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const SplitSection = ({ videoSrc, heading, description, reverse = false }) => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
        },
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

      tl.from(contentRef.current, {
        y: 300,
        duration: 1,
        ease: 'power2.in',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerStyle = {
    display: 'flex',
    flexDirection: reverse ? 'row-reverse' : 'row',
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
  }
  const colStyle = { flex: '1 1 50%', position: 'relative' }
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  }
  const contentBoxStyle = {
    padding: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fafafa',
    height: '100%',
    boxSizing: 'border-box',
  }
  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    lineHeight: 1.05,
    margin: 0,
    color: 'inherit',
  }
  const descStyle = {
    fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
    marginTop: '1rem',
    color: 'rgba(255,255,255,0.95)',
  }

  return (
    <section
      ref={sectionRef}
      style={containerStyle}
      className="split-section p-10"
    >
      <div style={colStyle} className="col video">
        <video
          style={videoStyle}
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="metadata"
        />
      </div>
      <div style={colStyle} className="col content">
        <div ref={contentRef} style={contentBoxStyle}>
          <div>
            <h2 style={headingStyle}>{heading}</h2>
            <p style={descStyle}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const SecondVideoSplit = () => (
  <>
    <SplitSection
      videoSrc="/videos/output_3.mp4"
      heading="Heading for this section"
      description="Descriptive content that appears with a delay while the section is pinned and scrolls across a 200% duration. Replace with your actual copy."
      reverse={false}
    />
    <SplitSection
      videoSrc="/videos/output_3.mp4"
      heading="Another Section Heading"
      description="Content on the left, video on the right. GSAP animations work independently for each section."
      reverse={true}
    />
  </>
)

export default SecondVideoSplit
