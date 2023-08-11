import { block } from "million/react";

const FooterBlock = block(function Footer() {
  return (
    <div className="w-full h-max flex items-center justify-center p-4 bg-primary text-white rounded-t-box">
      <span className="font-medium text-sm sm:text-base">
        طراحی شده با ❤️ توسط محمد رئوف زاهد
      </span>
    </div>
  );
});

export default FooterBlock;
