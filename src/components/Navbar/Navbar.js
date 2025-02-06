import React, { useState, useEffect }from "react";
import logo from "../../assets/images/logotheuniontenology.png";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
   useEffect(() => {
     // Função que será chamada sempre que o evento de scroll acontecer
     const handleScroll = () => {
       if (window.scrollY > 50) {
         // Quando o scroll for maior que 50px
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };

     // Adiciona o ouvinte de evento para o scroll
     window.addEventListener("scroll", handleScroll);

     // Remove o ouvinte de evento quando o componente for desmontado
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu">
        <div>
          <a href="#home">
            <img src={logo} alt="Logo The Union Technology" />
          </a>  
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === "home" ? "nav-item active" : "nav-item"}
              onClick={() => setActiveLink("home")}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={
                activeLink === "about" ? "nav-item active" : "nav-item"
              }
              onClick={() => setActiveLink("about")}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={
                activeLink === "services" ? "nav-item active" : "nav-item"
              }
              onClick={() => setActiveLink("services")}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#clients"
              className={
                activeLink === "clients" ? "nav-item active" : "nav-item"
              }
              onClick={() => setActiveLink("clients")}
            >
              Clientes
            </a>
          </li>
          <li>
            <a
              href="#manufacturers"
              className={
                activeLink === "manufacturers" ? "nav-item active" : "nav-item"
              }
              onClick={() => setActiveLink("manufacturers")}
            >
              Fabricantes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                activeLink === "contact" ? "nav-item active" : "nav-item"
              }
              onClick={() => setActiveLink("contact")}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
