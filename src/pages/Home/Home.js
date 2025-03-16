import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

function Home() {
  return (
    <main className="main-index" id="home">
      <div className="conteudo">
        <h1>Transformamos visões em soluções Tecnológicas inovadoras</h1>
        <span className="barra"></span>
        <span className="typewriter-text">
          <Typewriter
            words={[
              "Infraestrutura CFTV",
              "Redes",
              "Consultoria em TI",
              "Administração de Servidores",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <h3>Equipe altamente qualificada.</h3>
        <button className="botao_contato"><a href="#contact">Contato</a></button>
      </div>
    </main>
  );
}

export default Home;
