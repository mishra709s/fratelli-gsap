import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { useMaskSettings } from '../../constants'
// import ComingSoon from './ComingSoon'

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings()

  // useGSAP(() => {
  //   gsap.set('.mask-wrapper', {
  //     maskPosition: initialMaskPos,
  //     maskSize: initialMaskSize,
  //   })

  //   gsap.set('.mask-logo', { marginTop: '0vh', opacity: 0 })

  //   gsap.set('.entrance-message', { marginTop: '0vh' })

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.hero-section',
  //       start: 'top top',
  //       scrub: 2.5,
  //       end: '+=200%',
  //       pin: true,
  //     },
  //   })

  //   tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
  //     .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
  //     .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
  //     .to('.mask-wrapper', { maskPosition: maskPos, ease: 'power1.inOut' }, '>')
  //     .to('.mask-wrapper', { opacity: 0 })
  //   // .to(
  //   //   '.overlay-logo',
  //   //   {
  //   //     opacity: 1,
  //   //     onComplete: () => {
  //   //       gsap.to('.overlay-logo', { opacity: 0 })
  //   //     },
  //   //   },
  //   //   '<'
  //   // )
  //   // .to(
  //   //   '.entrance-message',
  //   //   {
  //   //     duration: 1,
  //   //     ease: 'power1.inOut',
  //   //     maskImage:
  //   //       'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
  //   //   },
  //   //   '<'
  //   // )
  // })

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    })

    gsap.set('.mask-logo', { marginTop: '0vh', opacity: 0 })
    gsap.set('.entrance-message', { marginTop: '0vh' })
    gsap.set('.navbar-logo', { opacity: 0 }) // Ensure NavBar logo starts hidden

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      },
    })

    tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { maskPosition: maskPos, ease: 'power1.inOut' }, '>')
      .to('.mask-wrapper', { opacity: 0, duration: 0.5 }, 'logo-transition') // Add a label
      .to(
        '.navbar-logo',
        { opacity: 1, duration: 0.5, ease: 'power1.inOut' },
        'logo-transition'
      ) // Use the same label
  })

  return (
    <section className="hero-section relative h-screen w-full overflow-hidden">
      {/* Background */}
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
