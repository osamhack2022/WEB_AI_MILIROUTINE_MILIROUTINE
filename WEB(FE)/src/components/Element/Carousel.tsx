import { Children, useCallback, useState, useMemo } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";

export interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [isSwiper, setIsSwiper] = useState<SwiperCore>();

  const settings = useMemo<SwiperProps>(
    () => ({
      modules: [Navigation],
      spaceBetween: 50,
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      allowTouchMove: false,
      loop: true,
      scrollbar: {
        draggable: false,
      },
      onBeforeInit: (swiper: SwiperCore) => {
        setIsSwiper(swiper);
      },
    }),
    []
  );

  const onPrev = useCallback(() => isSwiper?.slidePrev(), [isSwiper]);
  const onNext = useCallback(() => isSwiper?.slideNext(), [isSwiper]);

  return (
    <div className="relative">
      <div className="container max-w-screen-lg py-6">
        <Swiper {...settings}>
          {Children.map(children, (child) => {
            return <SwiperSlide>{child}</SwiperSlide>;
          })}
        </Swiper>
      </div>
      <div
        onClick={onPrev}
        className="cursor-pointer text-gray-400 p-2 w-20 h-20 rounded-full flex justify-center items-center absolute -left-16 inset-y-1/4 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <div
        onClick={onNext}
        className="cursor-pointer text-gray-400 p-2 w-20 h-20 rounded-full flex justify-center items-center absolute -right-16 inset-y-1/4 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};
