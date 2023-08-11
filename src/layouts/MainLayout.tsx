import { block } from "million/react";
import { Outlet } from "react-router-dom";
import NavbarBlock from "../components/Navbar";

const MainLayoutBlock = block(function MainLayout() {
  return (
    <div className="relative w-full">
      <NavbarBlock />
      <Outlet />
    </div>
  );
});

export default MainLayoutBlock;
