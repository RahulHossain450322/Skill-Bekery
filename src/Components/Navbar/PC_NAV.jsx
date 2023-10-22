import {} from "react";

import Logo_nav from "./Helper_Components/logo_nav";
import Nav_menu from "./Helper_Components/Nav_menu";
import Icons from "./Helper_Components/Icons";
function PC_NAV() {
  return (
    <nav className="container mx-auto lg:block md:hidden hidden sticky top-0 z-50 bg-black">
      <div className="flex items-center justify-between ">
        <Logo_nav />
        <Nav_menu />
        <Icons />
      </div>
    </nav>
  );
}

export default PC_NAV;
