import React, { useEffect, useState } from "react";
import "./Home.scoped.css";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Icons
import { HiArrowNarrowRight } from "react-icons/hi";

import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Images
import img1 from "../../im&ve/1.jpg";
import img2 from "../../im&ve/2.jpg";
import img3 from "../../im&ve/3.jpg";
import img4 from "../../im&ve/4.jpg";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);


  return (
    <div className="home App">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          height: "800px",
        }}
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <div className="text-content">
            <h2 data-aos="zoom-out-right" className="title">
              Sea <span>Season</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
              tempore maiores necessitatibus voluptamodi amet nostrum totam
              vitae laudantium. Quae asperiores corporis nesciunt
              adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
              tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
            </p>
            <button className="read-btn">
              Read More <HiArrowNarrowRight className="iIcon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt="" />
          <div className="text-content">
            <h2 data-aos="zoom-out-right" className="title">
              Pyramids <span>Season</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
              tempore maiores necessitatibus voluptamodi amet nostrum totam
              vitae laudantium. Quae asperiores corporis nesciunt
              adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
              tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
            </p>
            <button className="read-btn">
              Read More <HiArrowNarrowRight className="iIcon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="" />
          <div className="text-content">
            <h2 data-aos="zoom-out-right" className="title">
              Islamic <span>Season</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
              tempore maiores necessitatibus voluptamodi amet nostrum totam
              vitae laudantium. Quae asperiores corporis nesciunt
              adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
              tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
            </p>
            <button className="read-btn">
              Read More <HiArrowNarrowRight className="iIcon" />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt="" />
          <div className="text-content">
            <h2 data-aos="zoom-out-right" className="title">
              Sea <span>Season</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              ipsam, molestiae quin odit impedit ipsa laborum expedita possimus
              tempore maiores necessitatibus voluptamodi amet nostrum totam
              vitae laudantium. Quae asperiores corporis nesciunt
              adipisblanditiis quod, maxime dolorum itaque quas earum, tempora
              tenetur repellendus! Nisi repellenimpedit vitae doloribus quos.
            </p>
            <button className="read-btn">
              Read More <HiArrowNarrowRight className="iIcon" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Home;
