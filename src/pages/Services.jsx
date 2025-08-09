import React from 'react';
import styles from '../styles/Services.module.css';
import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5"
        viewBox="0 0 24 24" className={styles.svgIcon}>
        <path d="M9.75 3v1.5m4.5-1.5V4.5M3.75 9.75h16.5M3 7.5h18a.75.75 0 0 1 .75.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V8.25A.75.75 0 0 1 3 7.5Z" />
      </svg>
    ),
    title: 'Software Development',
    description: 'I build scalable and efficient software applications tailored to business needs using modern technologies.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5"
        viewBox="0 0 24 24" className={styles.svgIcon}>
        <path d="M3.75 5.25h16.5M3.75 9.75h16.5m-16.5 4.5h16.5M3.75 19.5h16.5" />
      </svg>
    ),
    title: 'Web Development',
    description: 'I design and develop responsive websites using HTML, CSS, JavaScript, and React, ensuring high performance and user experience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5"
        viewBox="0 0 24 24" className={styles.svgIcon}>
        <path d="M7.5 3.75h9a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.75V5.25a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path d="M9 18.75h6" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'I create user-friendly mobile apps for both Android and iOS platforms with a focus on performance and UI/UX.',
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h2>

      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <motion.div
            className={styles.card}
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
