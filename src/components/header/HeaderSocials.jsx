import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/idkabhi" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:justabhishek2020@gmail.com" target="_blank">
        <AiOutlineMail />
      </a>
      <a
        href="https://www.linkedin.com/in/abhishek-kumar-4a7147202/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/idkabhii/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;