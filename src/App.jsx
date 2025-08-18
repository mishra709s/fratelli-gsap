import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideoSplit from './sections/SecondVideoSplit'
// import SecondVideo from './sections/SecondVideo'
// import Lucia from './sections/Lucia'
// import PostCard from './sections/PostCard'
// import Final from './sections/Final'
// import Outro from './sections/Outro'
// import ViceCityIntro from './sections/ViceCityIntro'
// import FratelliBanner from './sections/FratelliBanner'
// import FratelliHero from './sections/FratelliHero'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      {/* <ViceCityIntro /> */}
      <FirstVideo />
      <Jason />
      <SecondVideoSplit />
      {/* 
      <SecondVideo />
      <Lucia /> */}

      {/* <PostCard /> */}
      {/* <Final /> */}
      {/* <Outro /> */}
    </main>
  )
}

export default App
