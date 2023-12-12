import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainSlider = () => {
  return (
    <Swiper style={{
        "--swiper-pagination-color": "lavender",
        "--swiper-navigation-color": "lavender",
    }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop = {true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='SwiperSlide'><img src={require("../img/mainslide/slide1.jpg")} alt="슬라이드 이미지1" /> </SwiperSlide>
      <SwiperSlide className='SwiperSlide'><img src={require("../img/mainslide/slide2.jpg")} alt="슬라이드 이미지2" /> </SwiperSlide>
      <SwiperSlide className='SwiperSlide'><img src={require("../img/mainslide/slide3.jpg")} alt="슬라이드 이미지3" /> </SwiperSlide>
      <SwiperSlide className='SwiperSlide'><img src={require("../img/mainslide/slide4.jpg")} alt="슬라이드 이미지4" /> </SwiperSlide>
      <SwiperSlide className='SwiperSlide'><img src={require("../img/mainslide/slide5.jpg")} alt="슬라이드 이미지5" /> </SwiperSlide>
    </Swiper>
  );
};
export default MainSlider;