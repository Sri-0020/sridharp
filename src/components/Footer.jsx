// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Sridharan P • Software Developer</p>
      <div className={styles.social}>
        <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://api.linkedin.com/login" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="sridharp0020@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
