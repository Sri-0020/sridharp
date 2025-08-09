import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const slides = [
  {
    images: [img1],
    heading: "Hello,I’m Sridharan P",
    subheading: "Software Developer",
    description: "I specialize in building performant, responsive web applications using React, HTML, CSS, and JavaScript.",
  },
  {
    images: [img2],
    heading: "Full-Stack Web  Apps",
    subheading: "MERN / REST APIs / Firebase",
    description: "Explore scalable apps built with MongoDB, Express, React, and Node.js. Clean code. Real-world deployments.",
  },
  {
    images: [img3],
    heading: "Responsive & Accessible Design",
    subheading: "Crafted for All Devices",
    description: "I build interfaces that adapt across screen sizes and follow accessibility best practices to ensure a seamless experience for every user.",
  },
];

const Home = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={styles.slide}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <div className={styles.textColumn}>
                <motion.h1
                  className={styles.heading}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {slide.heading}
                </motion.h1>

                <motion.h2
                  className={styles.subheading}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {slide.subheading}
                </motion.h2>

                <motion.p
                  className={styles.description}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <Link to="/projects" className={styles.cta}>View Projects</Link>
                </motion.div>
              </div>

              <motion.div
                className={styles.imageColumn}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
              >
                <div className={styles.imageWrapper}>
                  {slide.images.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt=""
                      aria-hidden="true"
                      className={styles.slideImg}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.2, delay: 1.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
