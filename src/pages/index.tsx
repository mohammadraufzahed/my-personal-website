import Services from "../components/Services";
import Skills from "../components/Skills";
import HeroBlock from "../components/Hero";
import PortfolioBlock from "../components/Portfolio";
import ContactMeBlock from "../components/ContactMe";

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-11">
      <HeroBlock />
      <Skills />
      <Services />
      <PortfolioBlock />
      <ContactMeBlock />
    </div>
  );
}

export default HomePage;
