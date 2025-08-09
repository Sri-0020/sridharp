import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Sridharan
      </motion.div>

      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to='/services' className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
        <NavLink to='/resume' className={({ isActive }) => isActive ? styles.active : ''}>Resume</NavLink>
         <NavLink to='/Gallery' className={({ isActive }) => isActive ? styles.active : ''}>My Gallery</NavLink>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
