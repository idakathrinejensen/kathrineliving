import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Kontakt from "./pages/Kontakt"
import Projekter from "./pages/Projekter"
import Projekt from "./pages/Projekt"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import English from "./pages/English"
import HvordanPris from "./pages/HvordanPris"
import Kunderne from "./pages/Kunderne"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/det-siger-kunderne" element={<Kunderne />} />
          <Route path="/projekter" element={<Projekter />} />
          <Route path="/projekt/:id" element={<Projekt />} />
          <Route path="/hvordan-og-pris" element={<HvordanPris />} />
          <Route path="/english" element={<English />} />
      </Routes>   
      <Footer/>
    </BrowserRouter>
  )
}

export default App
