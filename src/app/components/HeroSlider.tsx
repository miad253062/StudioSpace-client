'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const slides = [
  {
    title: "Cinematic Vision, Unlocked",
    subtext: "Professional stages and production suites for visionary filmmakers.",
    image: "/image.jpg"
  },
  {
    title: "Soundscapes Redefined",
    subtext: "Elite podcasting booths and music studios for industry-standard audio.",
    image: "/image2.jpg"
  },
  {
    title: "Capture the Infinite",
    subtext: "High-end photography studios designed for precision and light.",
    image: "/image3.jpg"
  }
  
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[80vh] min-h-150">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full [&_.swiper-button-next]:scale-[0.5] [&_.swiper-button-prev]:scale-[0.5]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white p-4 md:p-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-8">{slide.subtext}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/studios" className="bg-white text-[#262f49] hover:text-white hover:bg-[#262f49] transform duration-300 px-6 py-3 rounded-lg font-bold">
                    Explore Studios
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
