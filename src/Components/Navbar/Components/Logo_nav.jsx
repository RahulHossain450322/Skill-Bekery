import {} from "react";
import logo from "../images/image 2.png";
function Logo_nav() {
  return (
    <div className="flex">
      <div className="">
        <img src={logo} className="logo_style" alt="" />
      </div>
      <div className="ms-2 -space-y-2">
        <p className="text-2xl text-yellow-600 font-bold">SKILL</p>
        <p className="text-3xl text-slate-50">BAKERY</p>
        <p className="">
          <i className="text-slate-300">fresh course served</i>
        </p>
      </div>
    </div>
  );
}

export default Logo_nav;
