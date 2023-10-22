import {} from "react";
import Inline_sec from "./Inline_sec";
import { PiStudentDuotone } from "react-icons/pi";
import { BsJournalBookmark } from "react-icons/bs";
import { GiChessKing } from "react-icons/gi";
function H_Content() {
  return (
    <div className=" py-24 flex items-center bg_hero">
      <div className="py-24">
        <p className="font-bold text-2xl lg:text-7xl md:text-4xl text-slate-50">
          Web-Development Courses
        </p>
        <p className="text-lg mt-5 text-slate-300">
          Get our amazing courses on Udemy at great discounts
        </p>
        <div className="mt-5 grid lg:grid-cols-3 gap-4 grid-cols-1">
          <Inline_sec
            icon={<PiStudentDuotone className="text_color text-4xl" />}
            title={"40,103+ Happy Students"}
          />
          <Inline_sec
            icon={<BsJournalBookmark className="text_color text-4xl" />}
            title={"300+ Courses"}
          />
          <Inline_sec
            icon={<GiChessKing className="text_color text-4xl" />}
            title={"1990+ Reviews"}
          />
        </div>
        <div className="mt-8">
          <button className="bg_btn px-6 py-2 rounded-full text-slate-100 hover:bg-blue-500">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default H_Content;
