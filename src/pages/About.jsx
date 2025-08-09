import React from 'react';
import styles from '../styles/About.module.css';
import profileImage from '../assets/profile.jpg';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <motion.section
      className={styles.about}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {/* Top Section */}
      <motion.div className={styles.topSection} variants={fadeInUp}>
        <motion.div className={styles.imageContainer} whileHover={{ scale: 1.05 }}>
          <motion.img
            src={profileImage}
            alt="Sridharan P"
            className={styles.profileImg}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div className={styles.textContent} variants={fadeInUp}>
          <h1 className={styles.name}>Sridharan P</h1>
          <h3 className={styles.subtitle}>Software Developer</h3>
          <p className={styles.description}>
            I am a Software Developer with 3 years of experience in building modern, responsive web applications using HTML, CSS, JavaScript, and React. I love transforming complex problems into simple, elegant solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div className={styles.skillsSection} variants={fadeInUp}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <motion.div
          className={styles.iconGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            { icon: <FaHtml5 />, name: 'HTML' },
            { icon: <FaCss3Alt />, name: 'CSS' },
            { icon: <FaBootstrap />, name: 'Bootstrap' },
            { icon: <FaReact />, name: 'React' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <SiExpress />, name: 'Express.js' },
            { icon: <SiMongodb />, name: 'MongoDB' },
            { icon: <SiRedux />, name: 'Redux' }
          ].map((skill, index) => (
            <motion.div
              className={styles.iconItem}
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Sections: Experience, Certifications, Education */}
      <motion.div className={styles.bottomSections}>
        {[
          {
            title: 'Experience',
            content: [
              {
                role: 'Software Developer – Sun Network',
                duration: '2024 - Present',
                details: 'Worked on HRMS systems, built dynamic front-end interfaces and improved performance using React.'
              },
              {
                role: 'Frontend Developer – Alitemate Groups',
                duration: '2022 - 2024',
                details: 'Created responsive websites and implemented reusable components using HTML, CSS, and JavaScript.'
              }
            ]
          },
          {
            title: 'Certifications',
            content: [
              {
                role: 'React Developer',
                duration: ''
              },
              {
                role: 'Full Stack Web Development',
                duration: ''
              },
              {
                role: 'Java',
                duration: ''
              },
              {
                role: 'Python',
                duration: ''
              },
              {
                role: 'Selenium with eclipse ',
                duration: ''
              }

            ]
          },
          {
            title: 'Education',
            content: [
              {
                role: 'B.E. in Electrical & Electronics Engineering',
                details: 'Graduated with strong foundations in programming and system design.'
              }
            ]
          }
        ].map((section, index) => (
          <motion.div
            className={styles.section}
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>{section.title}</h2>
            {section.content.map((item, i) => (
              <p key={i}>
                <strong>{item.role}</strong><br />
                {item.duration}<br />
                {item.details && <>{item.details}</>}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
