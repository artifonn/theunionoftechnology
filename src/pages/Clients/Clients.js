import React, { useState, useEffect } from "react";
import "./Clients.css";

import findUp from "../../assets/images/findUp.png";
import intelbras from "../../assets/images/intelbras.png";
import sgbr from "../../assets/images/logo-sgbr-og.png";
import maminfo from "../../assets/images/MAMINFO-LOGO.png";
import cocacola from "../../assets/images/coca-cola.png";

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { src: cocacola, alt: "Cliente Coca-Cola" },
    { src: findUp, alt: "Cliente FindUp" },
    { src: intelbras, alt: "Cliente Intelbras" },
    { src: sgbr, alt: "Cliente SGBR" },
    { src: maminfo, alt: "Cliente MAMINFO" },
  ];

  // Função para ir ao próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };

  // Configurar o intervalo para troca automática
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <main className="main-clients" id="clients">
      <div className="title-h1">
        <h1>Clientes</h1>
        <span className="barra"></span>
      </div>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {clients.map((client, index) => (
            <div className="slide" key={index}>
              <img
                src={client.src}
                alt={client.alt}
                style={{ width: "90%" }} // Define o tamanho das imagens como 90% da largura do slide
              />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </main>
  );
}

export default Clients;
