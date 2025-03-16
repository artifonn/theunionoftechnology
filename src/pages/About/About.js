import React from "react";
import "./About.css";

function About() {
  return (
    <main className="main-about">
      <div className="conteudo-about" id="about">
        <h1>Sobre nós</h1>
        <span className="barra"></span>
        <div className="texto-about">
          <p>
            Bem vindo à The Union of Technology, onde a paixão pela inovação e o
            compromisso com a excelência se encontram. Fundada por três amigos
            com mais de duas décadas de experiência combinada, nossa empresa
            nasceu da visão compartilhada de criar soluções tecnológicas
            inovadoras.
          </p>
          <p>
            Nós nos especializamos nas seguintes áreas principais:
            infraestrutura de redes, sistemas de CFTV, sistemas de informação,
            desenvolvimento, controle de cesso e cancelas automáticas.
          </p>
          <p>
            A nossa visão é corresponder e exceder as expectativas dos nossos clientes, provendo soluções e serviços de elevadas qualidades. Utilizamos o relacionamento interpessoal como diferencial na busca pela excelência no atendimento.
            Nossas soluções buscam reduzir custos, aumentando os beneficios e a rentabilidade operacional dos nossos clientes.
            Junte-se a nós nesta emocionante jornada rumo ao futuro
            da tecnologia.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
