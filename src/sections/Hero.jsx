import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// import { useMaskSettings } from '../../constants'
// import ComingSoon from './ComingSoon'

const Hero = () => {
  const [maskSettings, setMaskSettings] = useState({
    initialMaskPos: '49.5% 3%',
    initialMaskSize: '3000% 3000%',
    maskPos: '49.5% 3%',
    maskSize: '16% 12%',
  })

  useEffect(() => {
    const updateMaskSettings = () => {
      const logo = document.querySelector('.navbar-logo')
      if (logo) {
        const rect = logo.getBoundingClientRect()
        const vw = window.innerWidth
        const vh = window.innerHeight
        const x = ((rect.left + rect.width / 2) / vw) * 100
        const y = ((rect.top + rect.height / 2) / vh) * 100
        setMaskSettings({
          initialMaskPos: `${x}% ${y}%`,
          initialMaskSize: '1800% 1800%',
          maskPos: `${x}% ${y}%`,
          maskSize: `${(rect.width / vw) * 100}% ${(rect.height / vh) * 100}%`,
        })
      }
    }
    updateMaskSettings()
    window.addEventListener('resize', updateMaskSettings)
    return () => window.removeEventListener('resize', updateMaskSettings)
  }, [])

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: maskSettings.initialMaskPos,
      maskSize: maskSettings.initialMaskSize,
    })

    gsap.set('.mask-logo', { marginTop: '0vh', opacity: 0 })
    gsap.set('.entrance-message', { marginTop: '0vh' })
    gsap.set('.navbar-logo', { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      },
    })

    tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' }).to('.scale-out', {
      scale: 1,
      ease: 'power1.inOut',
    })
    tl.to(
      '.mask-wrapper',
      { maskSize: maskSettings.maskSize, ease: 'power1.inOut' },
      '<'
    )
      .to('.mask-wrapper', { opacity: 0, duration: 0.5 }, 'logo-transition')
      .to(
        '.navbar-logo',
        { opacity: 1, duration: 0.2, ease: 'power1.inOut' },
        'logo-transition'
      )
  })

  return (
    <section className="hero-section relative h-screen w-full overflow-hidden">
      <div className="size-full mask-wrapper">
        <img
          src="/images/banner-img.jpg"
          alt="background"
          className="scale-out w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="mt-30"
            style={{
              width: '800px',
              height: '406.428px',
              flexShrink: 0,
            }}
          >
            {/* Left text */}
            <div className="text-left">
              <div className="font-sans text-white text-xl md:text-2xl lg:text-3xl font-light mb-2">
                Rooted in
              </div>
              <div className="font-serif italic leading-tight text-white text-6xl md:text-7xl lg:text-8xl">
                India
              </div>
            </div>

            {/* Right text */}
            <div className="text-right">
              <div className="font-sans text-white text-xl md:text-2xl lg:text-3xl font-light mb-2">
                Savoured
              </div>
              <div className="font-playfair italic leading-tight text-white text-6xl md:text-7xl lg:text-8xl">
                Everywhere
              </div>
            </div>
          </div>
        </div>

        <div className="absolute text-white text-[20px]/1.2 bottom-0 flex items-start max-w-[276px] tracking-tighter m-12">
          Our heart lies in our two hundred and forty acre vineyard, nestled in
          the region of Akluj.
        </div>
      </div>

      {/* Logo */}
      <div>
        <img
          src="/images/fratelli-logo.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      {/* <ComingSoon /> */}
    </section>
  )
}

export default Hero
