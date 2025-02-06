import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

function Home() {
  return (
    <main className="main-index" id="home">
      <div className="conteudo">
        <h1>Transformamos visões em soluções Tecnológicas inovadoras</h1>
        <span className="barra"></span>
        {/* <h2>Infraestrutura de Redes</h2> */}
        <span className="typewriter-text">
          <Typewriter
            words={[
              "Infraestrutura CFTV",
              "Redes",
              "Consultoria em TI",
              "Administração de Servidores.",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <h3>Equipe altamente qualificada.</h3>
        <a href="#contact">
          <button className="botao_contato">Contato</button>
        </a>
      </div>
    </main>
  );
}

export default Home;
