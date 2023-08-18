import { block } from "million/react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const links = [
  {
    title: "نمونه کار ها",
    href: "#portfolios",
  },
  {
    title: "درباره من",
    href: "#about_me",
  },
  // {
  //   title: "رزومه",
  //   href: "#resume",
  // },
  {
    title: "تماس با من",
    href: "#contact_me",
  },
];

function NavbarBlock() {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen((open) => !open);
  };
  return (
    <nav className="relative w-full h-max flex flex-row items-center justify-between">
      <div className="w-max flex items-center justify-center gap-11">
        <span className="w-max text-3xl md:text-4xl lg:text-5xl font-black">
          م
        </span>
        <div className="hidden md:block">
          <LinksContainerBlock toggle={toggle} />
        </div>
      </div>
      <div>
        <div className="md:hidden">
          <Hamburger toggled={open} onToggle={toggle} />
        </div>
        <div
          data-open={open}
          className="group data-[open=false]:hidden md:hidden"
        >
          <div
            className="fixed w-full h-full bg-primary/10 backdrop-blur-sm left-0 top-0 opacity-0 group-data-[open=true]:animate-opacity"
            onClick={toggle}
          />
          <div className="fixed w-44 translate-x-[-50vw] h-full z-10 top-0 left-0 bg-white group-data-[open=true]:animate-sidebar flex flex-col items-start justify-start pt-4">
            <AiOutlineClose
              onClick={toggle}
              className="text-primary w-10 self-end cursor-pointer"
            />
            <div className="w-full flex-auto flex flex-col items-center justify-between py-4">
              <LinksContainerBlock toggle={toggle} />
              <LetsTalkBlock />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <LetsTalkBlock />
        </div>
      </div>
    </nav>
  );
}

const LinksContainerBlock = block(function ({ toggle }) {
  return (
    <div className="w-full flex-auto flex flex-col md:flex-row items-center justify-start gap-4 pt-5">
      {links.map((link) => (
        <a
          key={`navbar_sidebar_link_to_${link.href}`}
          href={link.href}
          onClick={toggle}
          className="relative"
        >
          <span className="peer">{link.title}</span>
          <div className="absolute transition-all duration-300 w-0 peer-hover:w-full h-[2px] bg-primary" />
        </a>
      ))}
    </div>
  );
});

const LetsTalkBlock = block(function LetsTalk() {
  return (
    <a href="mailto:mohammadraufzahedlink@proton.me">
      <div className="text-primary cursor-pointer flex flex-row items-center justify-center gap-4 border-b-2 border-primary pb-3.5">
        <span className="font-semibold text-sm md:text-base lg:text-2xl ">
          بیا صحبت کنیم
        </span>
        <FaArrowLeft className="w-4" />
      </div>
    </a>
  );
});

export default NavbarBlock;
