import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={5} observer observeParents>
      {Children.map(children, (child) => {
        return <SwiperSlide>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};
