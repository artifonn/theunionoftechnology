import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logotheuniontenology.png";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu hambúrguer

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar entre abrir e fechar o menu
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu">
        <div>
          <a href="#home">
            <img src={logo} alt="Logo The Union Technology" />
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === "home" ? "nav-item active" : "nav-item"}
              onClick={() => {
                setActiveLink("home");
                setIsMenuOpen(false); // Fechar o menu ao clicar em um link
              }}
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
              onClick={() => {
                setActiveLink("about");
                setIsMenuOpen(false);
              }}
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
              onClick={() => {
                setActiveLink("services");
                setIsMenuOpen(false);
              }}
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
              onClick={() => {
                setActiveLink("clients");
                setIsMenuOpen(false);
              }}
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
              onClick={() => {
                setActiveLink("manufacturers");
                setIsMenuOpen(false);
              }}
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
              onClick={() => {
                setActiveLink("contact");
                setIsMenuOpen(false);
              }}
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