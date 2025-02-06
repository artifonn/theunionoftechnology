import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import Clients from "./pages/Clients/Clients";
import About from "./pages/About/About";
import Manufacturers from "./pages/Manufacturers/Manufacturers";
import Contact from "./pages/Contact/Contact";
import "./styles/global.css";
import SmoothScroll from "smooth-scroll";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  offset: 50,
  speedAsDuration: true,
});

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Home />
        <About />
        <Services />
        <Clients />
        <Manufacturers />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
