"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import { GalorySection } from "@/type";
import { useGlobalContext } from "@/context/store";

const Galory = ({
  titleFr,
  titleAr,
  subtitleFr,
  subtitleAr,
  type,
  data,
}: GalorySection) => {
  const { lang } = useGlobalContext();
  return (
    <Box className="h-full w-full px-[6px] lg:px-[60px] py-0 my-14 ">
      <Box className="w-full my-14">
        <Typography className="text-center font-bold text-4xl uppercase">
          {lang ? titleAr : titleFr}
        </Typography>
        <Typography className="text-center  text-lg ">
          {lang ? subtitleAr : subtitleFr}
        </Typography>
      </Box>

      <Swiper
        className="swiperrr cursor-pointer"
        slidesPerView={6}
        spaceBetween={-3}
        slidesPerGroup={3}
        loop={true}
        pagination={false}
        navigation={false}
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className={type ? "galory-class" : "slider-custom"}
            >
              <img src={item.image} alt={item.titleFr} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default Galory;
