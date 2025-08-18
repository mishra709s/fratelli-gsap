import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.jason',
          start: 'top 90%',
          end: '10% center',
          scrub: 2,
        },
      })
      .to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' })

    gsap.to(
      '.jason .img-box',
      {
        scrollTrigger: {
          trigger: '.jason',
          start: 'top center',
          end: '80% center',
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: 'power1.inOut',
      },
      '<'
    )
  })

  return (
    <section
      className="jason"
      // style={{
      //   background:
      //     'linear-gradient(200deg, #F7B38F 0%, #E09067 8.61%, #BF704C 26%, #734934 43%, #3D271C 52%)',
      // }}
    >
      <div className="max-w-3xl jason-content">
        <h1>The Journey in Every Pour</h1>
        <h2>Ode to origin and craft.</h2>
        <p>
          In the quiet hush of morning vines and the golden glow of dusk-touched
          barrels, Fratelli’s wines are born—not made. Each bottle is a
          testament to the land's embrace, to the patience of seasons, and the
          intimate alchemy of nature and nurture. These are not mere varietals.
          They are passages—of story, soil, and soul.
        </p>

        {/* <div className="jason-2 w-full">
          <img src="/images/bottle-2.png" />
        </div> */}
      </div>

      <div className="space-y-5 mt-96 img-box">
        {/* <div className="jason-1">
          <img src="/images/bottle-1.png" />
        </div>
        <div className="jason-3">
          <img src="/images/bottle-3.png" />
        </div> */}
        <div className="jason-2 w-full">
          <img src="/images/bottle-2.png" />
        </div>
      </div>
    </section>
  )
}

export default Jason
