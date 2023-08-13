import { lazy } from "react";
const HeroBlock = lazy(() => import("../components/Hero"));
const Skills = lazy(() => import("../components/Skills"));

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-11">
      <HeroBlock />
      <Skills />
    </div>
  );
}

export default HomePage;
