import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjvgpqg",
        "template_5wzl5gs",
        form.current,
        "FLTMMuA5P1-j5i0js"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1>Get In Touch</h1>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>justabhishek2020@gmail.com</h5>
            <a href="mailto:justabhishek2020@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+9650683382</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9650683382"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <b>Send Message</b>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;