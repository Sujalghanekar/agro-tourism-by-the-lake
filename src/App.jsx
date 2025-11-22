import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Pricing from "./pages/Pricing.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer.jsx";


// ✅ Lightbox Styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Correct spacing below fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />

      <a
        href="https://wa.me/919356128719"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full 
             shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-transform hover:scale-125 
             flex items-center justify-center z-50"
      >
        <FaWhatsapp size={32} />
      </a>

    </>
  );
}
