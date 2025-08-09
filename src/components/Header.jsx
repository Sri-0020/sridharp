import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Sridharan
      </motion.div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <motion.nav
        className={`${styles.nav} ${isOpen ? styles.activeMenu : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>Resume</NavLink>
        <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>My Gallery</NavLink>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
