import { block, For } from "million/react";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "./Skills";

const portfolios: {
  name: string;
  description: string;
  image: string;
  social?: {
    website?: string;
    github?: string;
  };
  services: {
    name: string;
    color: string;
  }[];
}[] = [
  {
    name: "نرم افزار میز",
    description:
      "نرم افزار میز یک نرم افزار همه جانبه برای IOS و Android بود که به عاشقان قهوه این اجازه رو میداد که بتوانند نزدیک ترین کافه در اطراف خود را مشاهده کنند و به میز رزرو کنند.",
    image: "/images/portfolio/miz.png",
    services: [
      {
        name: "طراحی رابط کاربری",
        color: "#3498DB",
      },
      {
        name: "توسعه چندسکویی",
        color: "#808080",
      },
    ],
  },
  {
    name: "شاپینو",
    description:
      "قالب شاپینو یک طراحی منحصر به فرد و ویژه میباشد که برای یک فروشگاه اینترنتی طراحی شده. این فروشگاه با استفاده از بروزترین ابزار و متد های روز طراحی و پیاده سازی شده که باعث میشه کاربر نهایت لذت در خرید خود را احساس کند.",
    image: "/images/portfolio/shopino.png",
    services: [
      {
        name: "طراحی رابط کاربری",
        color: "#3498DB",
      },
      {
        name: "توسعه فول‌استک",
        color: "#FFA500",
      },
    ],
    social: {
      website: "https://ario-team-shopino.netlify.app/",
      github: "https://github.com/Ario-Team/shapino-frontend",
    },
  },
  {
    name: "رستوران بایت می",
    description:
      "قالب رستوران بایت می یک بازنویسی کاملا حرفه ای از قالب Biteme در وب سایت ThemeForest میباشد که با استفاده از بروزترین متد و ابزار های روز انجام شده.",
    image: "/images/portfolio/biteme.png",
    services: [
      {
        name: "توسعه فول‌استک",
        color: "#FFA500",
      },
    ],
    social: {
      website: "https://biteme-theme.netlify.app/",
      github: "https://github.com/Ario-Team/biteme-theme",
    },
  },
];

const PortfolioBlock = block(() => {
  return (
    <div className="w-full h-max flex flex-col items-center justify-start gap-[42px] py-8">
      <div className="w-max h-max flex flex-col items-center justify-start gap-4">
        <FaUserCircle size={32} className="text-primary" />
        <h2 className="w-full font-black text-primary text-center text-xl sm:text-2xl leading-header md:text-3xl md:leading-header  lg:text-5xl lg:leading-header">
          نمونه کار ها
        </h2>
        <p className="font-bold text-primary opacity-50 text-sm md:text-base">
          کار های منتخب من
        </p>
      </div>
      <div className="w-full h-max flex flex-col items-center justify-start gap-[52px]">
        <For each={portfolios}>
          {({ name, image, description, services, social }) => (
            <section
              dir="rtl"
              className="w-full h-max flex flex-col items-center gap-6 lg:flex-row-reverse lg:items-start"
            >
              <div className="w-full overflow-hidden max-h-[520px]">
                <img
                  className="w-full aspect-auto rounded-box"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="w-full h-full flex flex-col items-center justify-start gap-8 lg:h-[449px] lg:justify-between">
                <div className="w-full h-max flex flex-col items-center justify-center gap-8 lg:items-start">
                  <h1 className="font-semibold text-xl text-primary">{name}</h1>
                  <p className="text-center text-base font-normal leading-content lg:text-right">
                    {description}
                  </p>
                </div>
                <div className="w-full h-max flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                  <div className="w-max flex items-center justify-center gap-8">
                    <For each={services}>
                      {({ name, color }) => <Box name={name} color={color} />}
                    </For>
                  </div>
                  <div
                    className="w-max flex items-center justify-center gap-8 data-[show=false]:hidden"
                    data-show={Boolean(social)}
                  >
                    <SocialLinkBlock
                      text="وب سایت"
                      href={social?.website}
                      show={Boolean(social?.website)}
                    />
                    <SocialLinkBlock
                      text="گیت هاب"
                      href={social?.github}
                      show={Boolean(social?.github)}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </For>
      </div>
    </div>
  );
});

type SocialLinkProps = {
  text: string;
  href?: string;
  show?: boolean;
};

const SocialLinkBlock = block(function SocialLink({
  text,
  href,
  show = false,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      className="data-[show=false]:hidden font-medium pb-2 transition-all duration-300 cursor-pointer text-primary text-base border-primary border-b-[1px]"
      data-show={show}
    >
      {text}
    </a>
  );
});

export default PortfolioBlock;
