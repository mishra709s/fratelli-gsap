import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// import NavBar from './sections/NavBar'
import FratelliNav from "./sections/FratelliNav";
import AgeGate from "./sections/AgeGate";
import FullscreenVideo from "./sections/FullscreenVideo";
import FullSceenVideoContent from "./sections/FullScreenVideoContent";
import InstaComponent from "./sections/InstaComponent";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const handleConfirm = () => {
    // fade out the AgeGate and then set confirmed state
    gsap.to(".agegate-root", {
      autoAlpha: 0,
      duration: 0.6,
      onComplete: () => setAgeConfirmed(true),
    });
  };

  return (
    <main>
      <FratelliNav />
      {!ageConfirmed && (
        <div className="agegate-root">
          <AgeGate onConfirm={handleConfirm} />
        </div>
      )}
      {ageConfirmed && (
        <>
          <FullscreenVideo
            className="first-vd-wrapper-1"
            key="video-1"
            src="/videos/Video_2.mp4"
          />
          <FullSceenVideoContent className="content-1" key="content-1" />
          <FullscreenVideo
            className="first-vd-wrapper-2"
            key="video-2"
            src="/videos/Video_3.mp4"
          />
          <FullSceenVideoContent
            title="Explore Range of Fratelli"
            description="Ode to origin and craft."
            content="In the quiet hush of morning vines and the golden glow of dusk-touched barrels, Fratelli's wines are born—not made. Each bottle is a testament to the land's embrace, to the patience of seasons, and the intimate alchemy of nature and nurture. These are not mere varietals. They are passages—of story, soil, and soul."
            showButton
            className="content-2"
            key="content-2"
          />
          <FullscreenVideo
            className="first-vd-wrapper-3"
            key="video-3"
            src="/videos/Video_4.mp4"
          />
          <FullSceenVideoContent
            title="Luxury Meets Legacy"
            description="Luxury meets legacy."
            content="Beyond the vineyards, Fratelli unfolds into a world of curated experiences. Meander through manicured landscapes. Dine under stars beside aging barrels. Learn the art of winemaking from those who live it. This is not just a visit. It's an invitation—to feel, taste, and be transformed."
            className="content-3"
            key="content-3"
            showSvg
          />
          <FullscreenVideo
            className="first-vd-wrapper-4"
            key="video-4"
            src="/videos/Video_5.mp4"
          />
          <FullSceenVideoContent
            title="Live the wine life"
            description="Estate Experience."
            content="Stay where the grapes grow and stories begin. Our estate invites you to unwind, sip, and stay awhile. Surround yourself with a remarkable landscape and an impeccable range of wines."
            className="content-4"
            key="content-4"
          />
          <FullSceenVideoContent
            title="Live the wine life"
            description="Estate Experience."
            content="Stay where the grapes grow and stories begin. Our estate invites you to unwind, sip, and stay awhile. Surround yourself with a remarkable landscape and an impeccable range of wines."
            className="content-5"
            key="content-5"
            image="/images/Cheese_image.jpg"
            showButton
            buttonText="Explore Cheese"
          />
          <InstaComponent />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
