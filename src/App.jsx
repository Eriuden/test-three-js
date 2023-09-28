
import './App.css'
import { StarsCanvas } from './canvas/Stars'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from"./components"

function App() {
  

  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>

      <div>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  )
}

export default App
