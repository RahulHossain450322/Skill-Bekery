import {} from "react";
import img from "./Logo/image 2.png";
import { BsYoutube } from "react-icons/bs";
function Do_SubsCribe() {
  return (
    <div className="px-6 py-4 rounded-lg bg-slate-200 lg:w-5/12 w-full">
      <div className="flex md:flex-row lg:flex-row flex-col">
        <div className="flex">
          <img className="logo_style" src={img} />
          <div className="ms-3">
            <p className="font-medium text-lg">SkillBakary Studio in Youtube</p>
            <p className="text-sm mt-2 text-slate-600">3.22k subscribers</p>
          </div>
        </div>
        <div className="bg_red flex items-center px-8 md:ms-auto lg:ms-auto rounded-3xl wid ms-20">
          <BsYoutube className="text-slate-200 text-2xl" />
          <button className="text-slate-200 ms-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Do_SubsCribe;
