import { Header } from "../components/Header"
import { About } from "../components/About"
import { PsResult } from "../components/PsResult"
import { Team } from "../components/Team"
import { Footer } from "../components/Footer"
import { Partners } from "../components/Partners"
import { Projects } from "../components/Projects"

export function Home() {
  return (
    <div>
      <Header />
      <About />
      <Team/>
      <Partners/>
      <Projects/>
      <PsResult />
      <Footer />
    </div>
  )
}

