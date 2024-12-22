import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css'; // Custom styles

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper-custom"
      >
        <SwiperSlide>
          <div className="slide-content">
            <h2>Welcome back, Student.</h2>
            <p>New teachers wish you a great school year ahead.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Trending</h2>
            <p>Create stunning UI/UX designs and master user interfaces.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h2>Explore Knowledge</h2>
            <p>Learn with courses designed for academic excellence.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
