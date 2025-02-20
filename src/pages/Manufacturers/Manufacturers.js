import React, { useState, useEffect, useCallback } from "react";
import "./Manufacturers.css";

import PPA from "../../assets/images/PPA-logo.png";
import huawei from "../../assets/images/logo-huawei.png";
import intelbras from "../../assets/images/intelbras.png";
import fortnet from "../../assets/images/fortnet.png";
import cisco from "../../assets/images/Cisco-Logo.png";
import dlink from "../../assets/images/dlink-logo.png";
import hikvision from "../../assets/images/Hikvision_logo.png";

function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { src: PPA, alt: "Fabricante PPA" },
    { src: intelbras, alt: "Cliente Intelbras" },
    { src: fortnet, alt: "Cliente Fortnet" },
    { src: cisco, alt: "Cliente Cisco" },
    { src: dlink, alt: "Cliente D-Link" },
    { src: hikvision, alt: "Cliente Hikvision" },
    { src: huawei, alt: "Cliente huawei" },
  ];

  // Função para ir ao próximo slide, memorizada para evitar recriação em cada renderização
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  }, [clients.length]);

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
  }, [nextSlide]); // Adicionamos nextSlide como dependência

  return (
    <main className="main-fabricantes" id="manufacturers">
      <div className="title-h1">
        <h1>Fabricantes</h1>
        <span className="barra"></span>
      </div>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {clients.map((client, index) => (
            <div className="slide" key={index}>
              <img src={client.src} alt={client.alt} style={{ width: "90%" }} />
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
