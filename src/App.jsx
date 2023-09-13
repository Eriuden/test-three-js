import { useState } from 'react'
import './App.css'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from"./components"

function App() {
  

  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
