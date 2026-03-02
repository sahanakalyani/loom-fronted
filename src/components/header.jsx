import React from "react";
import LooomLogo from "../assets/looom-logo.svg";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <div className="md:hidden bg-white/70 sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex justify-between item-centre w-full py-2.5px-4">
        <div></div>
        <img src={LooomLogo} alt="Logo" className="w-8 h-8 "></img>
        <UserMenu size={24} align="end" />
      </div>
    </div>
  );
};
export default Header;
