import { block } from "million/react";

const HeroBlock = block(function Hero() {
  return (
    <div className="w-full px-5 overflow-hidden text-center h-[500px] bg-primary relative	 bg-cover bg-no-repeat rounded-box flex flex-col items-center justify-center text-white gap-8">
      <h1 className="font-black z-10 text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header max-w-[696px]">
        سلام! من محمد رئوف زاهد هستم! توسعه‌دهنده فرانت‌اند از تهران
      </h1>
      <span className="font-semibold z-10 text-base sm:text-lg md:text-xl leading-[165%] lg:text-2xl">
        توسعه‌دهنده فرانت‌اند در شرکت ایرانی کارت
      </span>
      <div className="absolute w-full h-full top-0 left-0 bg-hero bg-cover bg-no-repeat opacity-40 z-0"></div>
    </div>
  );
});

export default HeroBlock;
