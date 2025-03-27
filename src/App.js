import { BrowserRouter as Router } from "react-router-dom";
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
      <div>
        <Navbar />
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
