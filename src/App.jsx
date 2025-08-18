import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideoSplit from './sections/SecondVideoSplit'

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
