import banner1 from "../assets/Slide1.png";
import banner2 from "../assets/Slide2.png";
import banner3 from "../assets/Slide3.png";
import banner4 from "../assets/Slide4.png";
import banner5 from "../assets/Slide5.png";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow"

const Banner = () => {
  return (
    <div className="max-w-full lg:max-w-[90%] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="coverflow"
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        className="rounded-xl"
      >
        <SwiperSlide><img src={banner1} alt="banner Image" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="banner Image" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner Image" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="banner Image" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="banner Image" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
