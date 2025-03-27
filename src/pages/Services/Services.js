import React from "react";
import "./services.css";

import consultoria from '../../assets/images/consultoria_icone.png';
import CFTV from '../../assets/images/CFTV_icone.png';
import administraçãoServidores from '../../assets/images/administacao_servidores_icone.png';
import suporteTecnico from '../../assets/images/suporte_icone.png';
import infraestruturaTI from '../../assets/images/infraestrutura-TI.png';
import manutencaoComputadores from '../../assets/images/manutencaocomputadores.png';

function Services() {
  return (
    <main className="main-services" id="services">
      <div className="conteudo-service">
        <h1>Serviços</h1>
        <span className="barra"></span>
        <div className="container-services">
          <div className="div_services">
            <img src={consultoria} alt="Consultoria e Infraestrutura" />
            <h2>Consultoria em TI e Infraestrutura</h2>
            <p>
              Implementação de Sistemas Operacionais, Aplicações, Segurança,
              Armazenamento de Dados Políticas de Backup/ Restore e Planos de
              contingência, etc.
            </p>
          </div>
          <div className="div_services">
            <img src={CFTV} alt="Infraestrutura CFTV" />
            <h2>Infraestrutura CFTV</h2>
            <p>
              Instalação profissional de sistemas de segurança, incluindo
              alarmes, câmeras de vigilância, sensores de movimentos, fechaduras
              inteligentes e sistema de controle de acesso.
            </p>
          </div>
          <div className="div_services">
            <img
              src={administraçãoServidores}
              alt="Administração de Servidores"
            />
            <h2>Administração de Servidores</h2>
            <p>
              Configuração de Servidores, Estações, Servidores DHCP, VPN,
              Arquivos, Compartilhamentos, Usuários, Permissões, Antivírus,
              Firewall, Trafego de entrada/saída e Regras de grupo,
              Monitoramento, Otimização e Tarefas Aplicadas, etc.
            </p>
          </div>
          <div className="div_services">
            <img src={suporteTecnico} alt="Suporte Técnico" />
            <h2>Suporte Técnico</h2>
            <p>
              Com ampla experiência no suporte técnico e gerenciamento de redes,
              oferecemos soluções completas para empresas que buscam garantir a
              eficiência e a continuidade de suas operações. Prestamos suporte
              técnico para todos os computadores internos, assegurando o bom
              funcionamento dos sistemas e a resolução de eventuais problemas.
              Também somos responsável pelo gerenciamento de redes OI Wi-Fi para
              diversos clientes, realizando a configuração e manutenção de
              infraestruturas de rede com alta disponibilidade e performance.
            </p>
          </div>

          <div className="div_services">
            <img
              src={infraestruturaTI}
              alt="Infraestrutura de TI"
            />
            <h2>Infraestrutura de TI</h2>
            <p>
              A Infraestrutura de TI refere-se a todo o conjunto de componentes
              necessários para suportar as operações de tecnologia em uma organização. 
              Isso inclui hardware, software, redes, data centers, sistemas de segurança, bem como 
              recursos humanos e processos associados.
            </p>
          </div>
          <div className="div_services">
            <img
              src={manutencaoComputadores}
              alt="Manutenção de Computadores"
            />
            <h2>Manutenção de Computadores</h2>
            <p>
            Oferecemos serviços especializados de manutenção de computadores, notebooks e dispositivos relacionados, garantindo o bom funcionamento e a longevidade dos seus equipamentos. Nossa equipe técnica qualificada realiza diagnósticos precisos, reparos de hardware, atualizações de software, remoção de vírus e otimização de desempenho. Com soluções personalizadas e atendimento ágil, ajudamos sua empresa a evitar falhas e manter a produtividade em alta. Conte conosco para cuidar da sua infraestrutura de TI, enquanto você foca no que realmente importa: o crescimento do seu negócio.
            </p>
          </div>


        </div>
      </div>
    </main>
  );
}

export default Services;
