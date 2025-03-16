import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: theunionoftechnology@gmail.com</p>
          <p>Telefone: (61) 9981-3339</p>
        </div>
        <div className="footer-section">
          <h3>Endereço</h3>
          <p>Avenida Jequitibá, 685</p>
          <p>Águas Claras, DF</p>
          <p>CEP: 71929-540</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <a href="https://www.linkedin.com/company/theunionoftechnology" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.linkedin.com/company/theunionoftechnology" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; {new Date().getFullYear()} The Union of Technology. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;