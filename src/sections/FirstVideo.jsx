import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const FirstVideo = () => {
  const videoRef = useRef(null)

  useGSAP(() => {
    gsap.set('.first-vd-wrapper', { marginTop: '-100vh', opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-vd-wrapper',
        start: 'top top',
        end: '+=200% top',
        scrub: 2,
        pin: true,
      },
    })
    tl.to('.section-02', { delay: 0.5, opacity: 0, ease: 'power1.inOut' })
    tl.to('.first-vd-wrapper', {
      opacity: 1,
      duration: 2,
      ease: 'power1.inOut',
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: 'power1.inOut',
        },
        '<'
      )
    }

    // videoRef.current.addEventListener('loadeddata', () => {
    //   if (
    //     !isNaN(videoRef.current.duration) &&
    //     videoRef.current.duration !== Infinity
    //   ) {
    //     tl.to(
    //       videoRef.current,
    //       {
    //         currentTime: videoRef.current.duration,
    //         duration: 3,
    //         ease: 'power1.inOut',
    //       },
    //       '<'
    //     )
    //   }
    // })
  }, [])

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          src="/videos/output1_1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  )
}

export default FirstVideo
