"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CarouselProps {
  children?: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const childArray = React.Children.toArray(children);
  return (
    <>
      {childArray.length > 0 && (
        <Swiper spaceBetween={50} slidesPerView={3}>
          {childArray.map((child, index) => {
            return <SwiperSlide key={index}>{child}</SwiperSlide>;
          })}
        </Swiper>
      )}
    </>
  );
}
