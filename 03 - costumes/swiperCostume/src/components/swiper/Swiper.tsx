import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import "./slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CostumeArrow from "./arrow/CostumeArrow";
import CostumePagenation from "./pagenation/Pagenation";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard , Pagination]);



const Swiperslider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2.7,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 440,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
        cssMode={true}
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        pagination={{
          el:".custom-pagination",
          clickable:true,
        }}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure>
            <img src="/imgs/1.avif" alt="" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/imgs/2.avif" alt="" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/imgs/3.avif" alt="" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/imgs/4.avif" alt="4" />
          </figure>
        </SwiperSlide>

        {/* Include custom navigation components */}
   <CostumeArrow/>
   <CostumePagenation/>
      </Swiper>
    </div>
  );
};

export default Swiperslider;
