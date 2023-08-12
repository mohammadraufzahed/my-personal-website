import { Outlet } from "react-router-dom";
import NavbarBlock from "../components/Navbar";
import FooterBlock from "../components/Footer";

function MainLayoutBlock() {
  return (
    <div className="w-full min-h-[96.7vh] flex flex-col justify-between gap-11">
      <NavbarBlock />
      <div className="w-full flex-auto">
        <Outlet />
      </div>
      <FooterBlock />
    </div>
  );
}

export default MainLayoutBlock;
