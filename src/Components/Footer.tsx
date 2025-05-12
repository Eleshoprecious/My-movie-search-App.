import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Movie-Scout. All Rights Reserved.</p>
      <p>Powered by OMDb API</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaGithub({})}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaTwitter({})}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {FaLinkedin({})}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
