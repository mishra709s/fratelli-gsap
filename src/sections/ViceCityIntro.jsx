import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const section02BaseStyle = {
  width: "100%",
  height: "100dvh",
  position: "relative",
  inset: 0,
  opacity: 0,
  objectFit: "cover",
  backgroundImage: `radial-gradient(
                    circle at 50% 200vh,
                    rgba(255, 214, 135, 0) 0,
                    rgba(157, 47, 106, 0.5) 90vh,
                    rgba(157, 47, 106, 0.8) 120vh,
                    rgba(32, 31, 66, 0) 150vh
                )`,
  duration: 3,
  WebkitTextFillColor: "transparent",
  fontSize: "6rem",
  backgroundClip: "text",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "left",
  padding: "0 2rem",
  visibility: "visible",
};

const section02H3Style = {
  fontSize: "2.5rem",
};

const section02PStyle = {
  maxWidth: "90%",
  fontSize: "1rem",
};

// Responsive styles for large screens
const useResponsiveStyles = () => {
  if (typeof window !== "undefined" && window.innerWidth >= 1024) {
    return {
      section: {
        margin: "0 auto",
        maxWidth: "60%",
        padding: 0,
      },
      h3: { fontSize: "3.5rem" },
      p: { fontSize: "2rem" },
    };
  }
  return { section: {}, h3: {}, p: {} };
};

const ViceCityIntro = () => {
  const sectionRef = useRef(null);
  const responsive = useResponsiveStyles();

  useGSAP(() => {
    gsap.set(sectionRef.current, { marginTop:'-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top', // triggers when hero section scroll ends
        end: '200% top',
        scrub: true,
        pin: true, // pin the section during the scroll
      }
    });
    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
    tl.fromTo(
            ".section-02",
            {
                backgroundImage: `radial-gradient(
                    circle at 50% 200vh,
                    rgba(255, 214, 135, 0) 0,
                    rgba(157, 47, 106, 0.5) 90vh,
                    rgba(157, 47, 106, 0.8) 120vh,
                    rgba(32, 31, 66, 0) 150vh
                )`,
            },
            {
                backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
                    rgb(247, 77, 82) 50.011vh,
                    rgb(145, 42, 105) 90.0183vh,
                    rgba(32, 31, 66, 0) 140.599vh)`,
                duration: 3,
            },
            "<1.2"
        );
    tl.to(sectionRef.current, { opacity: 1, ease: 'power1.inOut' }, '<');
  }, []);


  return (
    <div
      ref={sectionRef}
      className="section-02"
      style={{ ...section02BaseStyle, ...responsive.section }}
    >
      <h3
        className="font-gta font-bold"
        style={{ ...section02H3Style, ...responsive.h3 }}
      >
        Vice City, USA.
      </h3>
      <p className="font-gta" style={{ ...section02PStyle, ...responsive.p }}>
        Jason and Lucia have always known the deck is stacked against them.
        But when an easy score goes wrong, they find themselves on the darkest
        side of the sunniest place in America, in the middle of a criminal
        conspiracy stretching across the state of Leonida — forced to rely on
        each other more than ever if they want to make it out alive.
      </p>
    </div>
  );
};

export default ViceCityIntro;
