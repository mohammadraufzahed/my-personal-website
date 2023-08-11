import { block } from "million/react";
import { Outlet } from "react-router-dom";
import NavbarBlock from "../components/Navbar";
import FooterBlock from "../components/Footer";

const MainLayoutBlock = block(function MainLayout() {
  return (
    <div className="w-full min-h-[96.7vh] flex flex-col justify-between">
      <NavbarBlock />
      <div className="w-full flex-auto">
        <Outlet />
      </div>
      <FooterBlock />
    </div>
  );
});

export default MainLayoutBlock;
