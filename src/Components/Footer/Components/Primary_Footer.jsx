import {} from "react";
import logo from "./Images/image 2.png";
function Primary_Footer() {
  return (
    <div className="flex items-center lg:flex-row space-y-6 flex-col">
      <div className="flex lg:me-0 me-auto">
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
      <ul className="list-none text-slate-300 flex items-center lg:flex-row gap-6 lg:ms-36 flex-wrap ">
        <li className="">About</li>
        <li className="">Our Courses</li>
        <li className="">Reviews</li>
        <li className="">Contacts</li>
        <li className="">Help & Support</li>
        <li className="">Privacy Policy</li>
        <li className="">Terms & Conditions</li>
      </ul>
    </div>
  );
}

export default Primary_Footer;
