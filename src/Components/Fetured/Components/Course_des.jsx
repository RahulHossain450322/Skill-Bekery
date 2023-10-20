import {} from "react";
import {
  BsStopwatchFill,
  BsFillCartDashFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidStarHalf, BiSolidBookReader } from "react-icons/bi";
function Course_des({ img }) {
  return (
    <div className="relative">
      <div className="">
        <img className="w-full img_top_rounded" src={img} alt="" />
        <p className="text-slate-200 text-xl absolute left-4 top-1 ">
          By: SkillBekery Studio
        </p>
      </div>
      <div className="px-4 py-6 bg-slate-100 course_card">
        {/* top */}
        <div className="flex items-center justify-between">
          <p className="bg_btn rounded-full px-4 text-white py-2 font-medium">
            App Development
          </p>
          <p className="text_color font-bold">
            55560.78€
            <span className="mute_color"> (78$)</span>
          </p>
        </div>
        {/* middile */}
        <div className="mt-6">
          <p className="text-xl font-bold">Progressing Web Apps using React</p>
          <p className="mt-3">
            In this course, we will be learning how to create Progressive Web
            Application (PWA) using React...
          </p>
        </div>
        {/* bottom */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <BiSolidBookReader className="text-blue-600" />
            <p className="ms-2 mute_color text-sm">Lessons</p>
          </div>
          <div className="flex items-center">
            <BsStopwatchFill className="text-blue-600" />
            <p className="ms-2 mute_color text-sm">3 Houres</p>
          </div>
          <div className="flex items-center">
            <FaUserGraduate className="text-blue-600" />
            <p className="ms-2 mute_color text-sm">15 Students</p>
          </div>
        </div>
        {/* 4th Div */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <AiTwotoneStar className="text-blue-600" />
            <AiTwotoneStar className="text-blue-600" />
            <AiTwotoneStar className="text-blue-600" />
            <AiTwotoneStar className="text-blue-600" />
            <BiSolidStarHalf className="text-blue-600" />
            <p className="ms-3 mute_color">4.5 (225)</p>
          </div>
          <div className="">
            <BsFillCartDashFill className="text-white bg_btn text-4xl p-2 rounded-full" />
          </div>
          <div className="border-2 border-gray-300 rounded-full px-4 py-2 flex items-center">
            <button className="">Details</button>
            <BsArrowRight className="ms-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course_des;
