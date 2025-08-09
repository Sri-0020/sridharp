import React from 'react';
import styles from '../styles/Projects.module.css';
import { FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: 'HRMS - sunnetwork.in',
    tech: 'HTML, CSS, JavaScript, React',
  },
  {
    title: 'AlitemateGroups.com',
    tech: 'HTML, CSS, JavaScript, React',
  },
  {
    title: 'Freecodecamp projects',
    tech: 'React, Redux, Node.js, MongoDB',
  },
  {
    title: 'Portfolio Website',
    tech: 'HTML, CSS, JavaScript, React',
    url: '#'
  },
  {
    title: 'E-Commerce',
    tech: 'React, Firebase, Material UI',
    url: '#'
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <FaLaptopCode className={styles.icon} />
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
