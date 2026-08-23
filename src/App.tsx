import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hjem from './pages/Hjem'
import Home from './pages/Home'
import HvordanPris from './pages/HvordanPris'
import HowPrice from './pages/HowPrice'
import Om from './pages/Om'
import About from './pages/About'
import Kontakt from './pages/Kontakt'
import Contact from './pages/Contact'
import Inspiration from './pages/Inspiration'
import InspirationEn from './pages/InspirationEn'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hvordan-og-pris" element={<HvordanPris />} />
        <Route path="/how-and-price" element={<HowPrice />} />
        <Route path="/om" element={<Om />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/indtryk-og-referencer" element={<Inspiration />} />
        <Route path="/reviews-and-references" element={<InspirationEn />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
  )
}

export default App




