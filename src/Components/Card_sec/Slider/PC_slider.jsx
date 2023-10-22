import {} from "react";
// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Card_1 from "../Card_1";
import Card_2 from "../Card_2";
import Card_3 from "../Card_3";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card_4 from "../Card_4";
import Card_5 from "../Card_5";
import Card_6 from "../Card_6";
import Card_7 from "../Card_7";
function PC_slider() {
  return (
    <section className="hidden lg:block">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Card_1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_3 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_4 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_5 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_6 />
        </SwiperSlide>
        <SwiperSlide>
          <Card_7 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default PC_slider;
