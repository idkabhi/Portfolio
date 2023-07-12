import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://whatsapp.com">
          <BsWhatsapp />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Abhishek Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;