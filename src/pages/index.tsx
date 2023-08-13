import HeroBlock from "../components/Hero";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-11">
      <HeroBlock />
      <Skills />
    </div>
  );
}

export default HomePage;
