import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const skills: { name: string; color: string }[] = [
  {
    name: "TypeScript",
    color: "#007ACC",
  },
  {
    name: "Django",
    color: "#092E20",
  },
  {
    name: "React",
    color: "#4F5D95",
  },
  {
    name: "VueJS",
    color: "#41B883",
  },
  {
    name: "PHP",
    color: "#4F5D95",
  },
  {
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    name: "NestJS",
    color: "#E0234E",
  },
  {
    name: "React Native",
    color: "#61DAFB",
  },
  {
    name: "Python",
    color: "#306998",
  },
];

const Skills = () => {
  return (
    <Swiper
      dir="ltr"
      modules={[Autoplay]}
      className="w-full"
      autoplay={{ delay: 2000 }}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        530: {
          slidesPerView: 3,
        },
        712: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 5,
        },
        1198: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 7,
        },
      }}
      //   spaceBetween={83}
    >
      {skills.map(({ color, name }) => (
        <SwiperSlide key={`swiper_skills_${name}`}>
          <div className="flex items-center justify-center gap-2.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span
              className="w-max font-black text-base lg:text-xl"
              style={{ color }}
            >
              {name}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Skills;
