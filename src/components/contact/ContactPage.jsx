import React from "react";
import "./ContactPage.css";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => (
  <div className="contact-container">
    <div className="contact-info">
      <h2> Contacto </h2>
      <p>
        Para una pronta comunicación personalizada, podés contactarnos de lunes a sábados de 10:00 a 18:00 horas por los siguientes canales de atención:
      </p>
      <ul>
        <li>
            <FaWhatsapp style={{ color: "#25D366", fontSize: "1.2em", verticalAlign: "middle" }} />
            {" "}Por WhatsApp al +54 11 8888 8888</li>
        <li>📞 Por Teléfono al 11 4 999 9999</li>
        <li>✉️ Por e-mail llenando el formulario</li>
      </ul>
        <div className="contact-map">
            <h5> Visitanos </h5>
            <iframe 
                title="Ubicación Muebles del Valle"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.52587009030162!2d-65.21126948070025!3d-26.82678404282667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1760305444600!5m2!1ses-419!2sar" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: "8px", marginTop: "1.5rem" }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    
    <form className="contact-form">
      <label>
        <span>
            Nombre <span className="required">*</span>
        </span>
        <input type="text" placeholder="Nombre y Apellido (*)" required />
      </label>
      <label>
        <span>
            E-mail <span className="required">*</span>
        </span>
        <input type="email" placeholder="Email (*)" required />
      </label>
      <label>
        <span>
            Teléfono <span className="required">*</span>
        </span>
        <input type="tel" placeholder="Teléfono (*)" required />
      </label>
      <label>
        <span>
            Mensaje <span className="required">*</span>
        </span>
        <textarea placeholder="Mensaje (*)" required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default ContactPage;