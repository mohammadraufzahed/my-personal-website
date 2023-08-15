import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box } from "./Skills";

const services: { name: string; color: string }[] = [
  {
    name: "طراحی رابط کاربری",
    color: "#3498DB",
  },
  {
    name: "توسعه چندسکویی",
    color: "#808080",
  },
  {
    name: "توسعه فول‌استک",
    color: "#FFA500",
  },
];

const Services = () => {
  return (
    <div className="w-full h-max mt-[22px] flex flex-col gap-[52px]">
      <h2 className="w-full font-black text-primary text-center text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header">
        متمرکز بر روی ساخت یک تجربه عالی و بی نقص برای مشتریان شما
      </h2>
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          695: {
            slidesPerView: 3,
            centeredSlidesBounds: true,
            spaceBetween: 52,
          },
        }}
        className="w-full"
      >
        {services.map((service, i) => (
          <SwiperSlide key={`service_slider_item_${i}`}>
            <Box {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
