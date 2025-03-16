import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Importe o EmailJS
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

    const serviceID = "service_nccpfzj";
    const templateID = "template_vl5r5po";
    const publicKey = "cbZ-TtE2f0OzC5C7o";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email enviado com sucesso!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar o email:", error);
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      });
  };

  return (
    <main className="main-contatos" id="contact">
      <div className="title-h1">
        <h1>Contato</h1>
        <span className="barra"></span>
      </div>
      <div className="formulario-imagem">
        <div className="imagem">
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
