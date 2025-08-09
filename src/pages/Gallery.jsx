import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Gallery.css';

import img1 from '../assets/project1.jpg';
import img2 from '../assets/project2.jpg';
import img3 from '../assets/project3.jpg';
import img4 from '../assets/project4.jpg';
import img5 from '../assets/project5.jpg';

const Gallery = () => {
  const slides = [
    { id: 1, image: img1, title: 'Coffee Menu' },
    { id: 2, image: img2, title: 'City Skyline' },
    { id: 3, image: img3, title: 'Tribute page' },
    { id: 4, image: img4, title: 'Product Landing Page' },
    { id: 5, image: img5, title: 'Quiz Page' },
  ];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">My Projects</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        className="gallery-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="gallery-card fade-in-up">
              <img src={slide.image} alt={slide.title} />
              <h3>{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </Swiper>
    </section>
  );
};

export default Gallery;
