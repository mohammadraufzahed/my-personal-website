import { lazy } from "react";
import Services from "../components/Services";
const HeroBlock = lazy(() => import("../components/Hero"));
const Skills = lazy(() => import("../components/Skills"));

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-11">
      <HeroBlock />
      <Skills />
      <Services />
    </div>
  );
}

export default HomePage;
