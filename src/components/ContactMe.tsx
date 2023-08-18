import { block } from "million/react";

const ContactMeBlock = block(function ContactMe() {
  return (
    <div
      id="contact_me"
      className="w-full h-max flex flex-col items-center justify-start gap-[42px] py-8"
    >
      <h2 className="w-full font-black text-primary text-center text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header">
        بیا در مورد پروژت صحبت کنیم!
      </h2>
      <a
        href="mailto:mohammadraufzahedlink@proton.me"
        className="font-black cursor-pointer text-base text-white px-8 py-4 bg-primary rounded-box"
      >
        تماس با من
      </a>
    </div>
  );
});

export default ContactMeBlock;
