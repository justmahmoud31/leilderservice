// components/ImageSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "@/public/014bc867-10cd-4acb-b986-09daace1a378.jpg";
import image2 from "@/public/014bc867-10cd-4acb-b986-09daace1a3783.jpg";
import image3 from "@/public/0413b691-ba28-4ea5-bf50-416c5b2d3b00.jpg";
import image4 from "@/public/0c2490d7-8345-41ce-8e8e-77ae455a17f7.jpg";
import image5 from "@/public/ea3b571a-9903-4339-a0ed-9f2ccac036fa.jpg";
import image6 from "@/public/f22d2bab-7dea-4466-bf5c-d0aafc634617.jpg";
import image7 from "@/public/g-1.jpg";
import image8 from "@/public/g-2.jpg";
import image9 from "@/public/g-3.jpg";
import image10 from "@/public/g-4.jpg";
import image11 from "@/public/g-5.jpg";
import image12 from "@/public/g-6.jpg";
import image13 from "@/public/g-7.jpg";
import image14 from "@/public/g-8.jpg";
const images = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  image6.src,
  image7.src,
  image8.src,
  image9.src,
  image10.src,
  image11.src,
  image12.src,
  image13.src,
  image14.src,
];

export default function ImageSlider() {
  return (
    <div className="w-full  mt-8 rounded-2xl overflow-hidden shadow-lg lg:px-6 px-4">
      <div className="flex flex-col justify-center items-center my-2 gap-2">
        <h3 className="text-main uppercase font-bold">
        Bekijk onze liften in actie, op die manier kunt u bepalen welk type lift
        u nodig heeft
      </h3>
      <h2 className="font-bold lg:text-3xl text-xl">onze liften in actie</h2>
      </div>
      <div className="max-w-6xl mx-auto py-12">
        <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // default for small screens
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full  h-[700px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
