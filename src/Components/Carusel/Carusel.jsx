import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carusel.scss";

const Carusel = ({ feedback }) => {
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
        {feedback.map(({ avatar, fullname, id, position, feedback }) => (
          <SwiperSlide className="Slider" key={id}>
          <div className="Slider__feedbackContainer">
          <div className="Slider__feedback">{feedback}</div>
          {/* <p className="Slider__feedback">fghjncvbjandfffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccvlsndvlnlnaldnlanlanljbvlkjsbvkjsbvljbsvlkjbslkvjbsv</p> */}
            <div className="Slider__div">
              <div>
                <img src={avatar} alt="Slide 1" />
              </div>
              <div>
                <h3>{fullname}</h3>
                <span>{position}</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
        
      </Swiper>

      {/* Sonraki üç slayt */}
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
        initialSlide={3}
      ></Swiper>
    </div>
  );
};

export default Carusel;
