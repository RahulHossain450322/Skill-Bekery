import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Logo_nav from "./Components/Logo_nav";
import M_Nav_menu from "./Components/M_Nav_menu";

function Mobile_nav() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="container mx-auto lg:hidden">
      <div className="flex items-center justify-between">
        <Logo_nav />
        <div onClick={handleClick} className="pr-3">
          {toggle ? (
            <RxCross1 className="text-slate-200 text-4xl" />
          ) : (
            <FaBars className="text-slate-200 text-4xl" />
          )}
        </div>
      </div>
      {toggle && <M_Nav_menu />}
    </nav>
  );
}

export default Mobile_nav;
