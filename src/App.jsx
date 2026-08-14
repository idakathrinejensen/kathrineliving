import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"
import Inspiration from "./pages/Inspiration"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HvordanPris from "./pages/HvordanPris"
import Kunderne from "./pages/Kunderne"
import Om from './pages/Om'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/det-siger-kunderne" element={<Kunderne />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/hvordan-og-pris" element={<HvordanPris />} />
          <Route path="/om" element={<Om />} />
      </Routes>   
      <Footer/>
    </BrowserRouter>
  )
}

export default App
