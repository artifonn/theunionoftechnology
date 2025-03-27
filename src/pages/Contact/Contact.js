import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contact from "../../assets/images/Memory storage.gif";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
  
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatusMessage("Todos os campos obrigatórios devem ser preenchidos.");
      return;
    }

    if (!/^\d+$/.test(formData.phone)) {
      setStatusMessage("Por favor, insira um número de telefone válido (somente números).");
      return;
    }
    

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatusMessage("Por favor, insira um email válido.");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Não informado',
        message: formData.message
      };

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setStatusMessage("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error('Falha no envio');
      }

      setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
      
    } catch (error) {
      console.error('Erro detalhado:', error);
      setStatusMessage(`Erro ao enviar mensagem.Tente novamente mais tarde.`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="main-contatos" id="contact">
      <div className="title-h1">
        <h1>Contato</h1>
        <span className="barra"></span>
      </div>
      <div className="formulario-imagem">
        <div className="imagem">
          <img src={contact} alt="Pessoas se cumprimentando" />
        </div>
        <div className="formulario">
          {statusMessage && (
            <div className={`alert ${statusMessage.includes('sucesso') ? 'success' : 'error'}`}>
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome:*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone:*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="20"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem:*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength="1000"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={isSubmitting ? 'loading' : ''}
              aria-label="Enviar mensagem"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;