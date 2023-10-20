import {} from "react";

import Logo_nav from "./Components/logo_nav";
import Nav_menu from "./Components/Nav_menu";
import Icons from "./Components/Icons";
function PC_NAV() {
  return (
    <nav className="container mx-auto lg:block md:hidden hidden">
      <div className="flex items-center justify-between">
        <Logo_nav />
        <Nav_menu />
        <Icons />
      </div>
    </nav>
  );
}

export default PC_NAV;
