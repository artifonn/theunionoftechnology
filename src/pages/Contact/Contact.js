import React, { useState } from "react";
import './Contact.css';
import contact from "../../assets/images/Memory storage.gif";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o código para enviar o email
    const { name, email, phone, message } = formData;
    const emailData = {
      name,
      email,
      phone,
      message,
    };
    console.log(emailData); 
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <main className="main-contatos" id="contact">
      <div class="title-h1">
        <h1>Contato</h1>
        <span className="barra"></span>
      </div>
      <div className="formulario-imagem">
        <div class="imagem">
          <img src={contact} alt="Imagem de três pessoas se comprimentando" />
        </div>
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
