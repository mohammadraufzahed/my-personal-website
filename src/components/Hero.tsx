import { block } from "million/react";

const HeroBlock = block(function Hero() {
  return (
    <div className="w-full px-5 text-center h-[500px] bg-primary rounded-box flex flex-col items-center justify-center text-white gap-8">
      <span className="font-black text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header max-w-[696px]">
        سلام! من محمد رئوف زاهد هستم! توسعه‌دهنده فرانت‌اند از تهران
      </span>
      <span className="font-semibold text-base sm:text-lg md:text-xl leading-[165%] lg:text-2xl">
        توسعه‌دهنده فرانت‌اند در شرکت ایرانی کارت
      </span>
    </div>
  );
});

export default HeroBlock;
