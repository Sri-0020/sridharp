import React from 'react';
import styles from '../styles/Resume.module.css';
import backgroundImage from '../assets/iPortfolio.webp'; // ✅ import image

const Resume = () => {
  return (
    <section
      className={styles.resumeSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.name}>Sridharan.p</h1>
          <p className={styles.role}>Hello!!</p>
          <a
            href="/"
            className={styles.viewBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
