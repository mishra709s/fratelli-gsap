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
        end: '+=250% top',
        scrub: true,
        pin: true,
      },
    })
    tl.to('.first-vd-wrapper', {
      opacity: 1,
      ease: 'power1.inOut',
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 2.5,
          ease: "linear"
        }
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
          src="/videos/rock-bottle-new.mp4"
          className="first-vd"
        />
      </div>
    </section>
  )
}

export default FirstVideo
