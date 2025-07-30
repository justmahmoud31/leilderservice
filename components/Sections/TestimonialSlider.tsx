// components/TestimonialSlider.tsx
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Alpha Inc.",
    avatar: "",
    message: "This service exceeded my expectations. Highly recommended!",
  },
  {
    name: "Ali Nasser",
    role: "Freelancer",
    avatar: "",
    message: "Excellent experience! Very professional and quick service.",
  },
  {
    name: "Emily Chen",
    role: "Product Manager",
    avatar: "",
    message: "Their team is incredibly efficient. I’d definitely work with them again.",
  },
  {
    name: "David Smith",
    role: "Operations Lead",
    avatar: "",
    message: "Top-notch quality and very affordable pricing.",
  },
]

export default function TestimonialSlider() {
  return (
    <section className="py-12 lg:px-0 px-6 bg-gray-50">
      <div className="text-center mb-10">
        <h3 className="text-red-600 font-bold text-sm uppercase">Testimonials</h3>
        <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 max-w-6xl mx-auto"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <Card className="h-full shadow-md">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-800">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">“{t.message}”</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
