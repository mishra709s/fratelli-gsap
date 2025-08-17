// import React, { useRef, useState } from 'react'
// import gsap from 'gsap'

const CupBannerHero = () => {
  // const cupImgRef = useRef(null)
  // const [showCup, setShowCup] = useState(true)

  // const handleYes = () => {
  //   gsap.to(cupImgRef.current, {
  //     scale: 5,
  //     duration: 1.2,
  //     ease: 'power2.inOut',
  //     scrub: true,
  //     transformOrigin: 'center center',
  //     onComplete: () => {
  //       setShowCup(false)
  //     },
  //   })
  // }

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.hero-section',
  //     start: 'top top',
  //     scrub: 2.5,
  //     end: '+=200%',
  //     pin: true,
  //   },

  //   t1.to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
  //   .to('.mask-wrapper', { maskPosition: maskPos, ease: 'power1.inOut' }, '>')
  //   .to('.mask-wrapper', { opacity: 0 })
  // })

  return (
    <section
      className="hero-section"
      // style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
    >
      {/* Banner — static */}
      <div
        className="banner-container"
        // style={{ position: 'fixed', inset: 0, zIndex: 1 }}
      >
        <img
          src="/images/banner-img.jpg"
          alt="Banner"
          // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          className="banner-text"
          // style={{
          //   position: 'absolute',
          //   top: '40vh',
          //   width: '100%',
          //   textAlign: 'center',
          //   color: 'white',
          //   pointerEvents: 'none',
          //   userSelect: 'none',
          // }}
        >
          <h1 className="">Rooted in India</h1>
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Savour everywhere</h2>
        </div>
      </div>

      {/* Cup overlay only visible when showCup is true */}
      {/* {showCup && (
        <div
          className="cup-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#fafaf6',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            userSelect: 'none',
          }}
        >
          <div style={{ position: 'relative', width: 400, height: 520 }}>
           <img
              ref={cupImgRef}
              className="cup-img"
              src="/images/mask-cup-1.png"
              alt="Cup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transformOrigin: 'center center',
                transform: 'scale(1.4)',
              }}
            />
            <img
              // ref={cupImgRef}
              className="cup-img"
              src="/images/mask-cup-1.png"
              alt="Cup"
            />
            <div
              className="age-prompt"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                width: '70%',
              }}
            >
              <h2 style={{ marginBottom: 20, fontWeight: 'normal' }}>
                Are you of legal <br /> drinking age <br /> in your country?
              </h2>
              <div>
                <button
                  onClick={handleYes}
                  style={{
                    marginRight: 20,
                    padding: '8px 24px',
                    backgroundColor: '#fff',
                    border: 'none',
                    fontWeight: 'bold',
                    color: '#2b2b2b',
                    cursor: 'pointer',
                  }}
                >
                  YES
                </button>
                <button
                  onClick={() =>
                    alert('You must be of legal drinking age to proceed')
                  }
                  style={{
                    padding: '8px 24px',
                    backgroundColor: 'transparent',
                    border: '2px solid #fff',
                    fontWeight: 'bold',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <div
        className="cup-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#fafaf6',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          userSelect: 'none',
        }}
      >
        <div style={{ position: 'relative', width: 400, height: 520 }}>
          {/* <img
              ref={cupImgRef}
              className="cup-img"
              src="/images/mask-cup-1.png"
              alt="Cup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transformOrigin: 'center center',
                transform: 'scale(1.4)',
              }}
            /> */}
          <img
            // ref={cupImgRef}
            className="cup-img"
            src="/images/mask-cup-1.png"
            alt="Cup"
          />
          <div
            className="age-prompt"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center',
              width: '70%',
            }}
          >
            <h2 style={{ marginBottom: 20, fontWeight: 'normal' }}>
              Are you of legal <br /> drinking age <br /> in your country?
            </h2>
            <div>
              <button
                onClick={handleYes}
                style={{
                  marginRight: 20,
                  padding: '8px 24px',
                  backgroundColor: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                  color: '#2b2b2b',
                  cursor: 'pointer',
                }}
              >
                YES
              </button>
              <button
                onClick={() =>
                  alert('You must be of legal drinking age to proceed')
                }
                style={{
                  padding: '8px 24px',
                  backgroundColor: 'transparent',
                  border: '2px solid #fff',
                  fontWeight: 'bold',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CupBannerHero
