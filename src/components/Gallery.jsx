import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { galleryData } from '../constants';
import "../index.css";

const Gallery = () => {
  return (
    <section
      className="gallery-section bg-gradient-to-b from-gray-800 via-gray-900 to-black py-24 relative"
      id="gallery"
    >
      <h1 className="text-5xl md:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-12">
        Gallery
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
          autoplay={{ delay: 3000 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 10,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          className="rounded-xl overflow-hidden shadow-lg"
          breakpoints={{
            640: { slidesPerView: 1 },
            860: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {galleryData.map(({ image, alt, title, description }, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg transition-transform duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity duration-700 group-hover:opacity-80 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-700 group-hover:opacity-100 opacity-0">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-lg">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Gallery;
