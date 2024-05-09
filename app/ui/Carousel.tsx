"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
  children?: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const childArray = React.Children.toArray(children);
  return (
    <>
      {childArray.length > 0 && (
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          modules={[Pagination]}
          pagination
        >
          {childArray.map((child, index) => {
            return (
              <SwiperSlide key={index} className="pb-16">
                {child}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
