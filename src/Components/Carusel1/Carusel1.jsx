import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carusel1.scss";
const Carusel1 = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="Slider">
          <div className="Slider__div">
            <div>
              <img
                src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/team1-1-1.jpg"
                alt="Slide 1"
              />
            </div>
            <div>
              <h3>Jame Taylor</h3>
              <span>Web Developer</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carusel1;
