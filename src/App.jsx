import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import About from './Components/About.jsx'
import Clients from './Components/Clients.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import Loading from './Components/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App