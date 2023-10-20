import {} from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialYoutubeCircular } from "react-icons/ti";
function Secondary_footer() {
  return (
    <div className="py-14 flex items-center justify-between lg:flex-row md:flex-col space-y-3 flex-col ">
      <div className="flex items-center">
        <p className="text-lg font-bold text-slate-200">FOLLOW US</p>
        <div className="flex space-x-2 ms-8">
          <BiLogoGmail className="text-slate-200 hover:text_color text-3xl " />
          <AiFillLinkedin className="text-slate-200 hover:text_color text-3xl " />
          <IoLogoFacebook className="text-slate-200 hover:text_color text-3xl " />
          <AiOutlineTwitter className="text-slate-200 hover:text_color text-3xl " />
          <TiSocialYoutubeCircular className="text-slate-200 hover:text_color text-3xl " />
        </div>
      </div>
      <p className="text-slate-200">
        &copy; 2022-2023 SkillBekery Studio | Refund Policy | All Rights
        Reserved | DevTek
      </p>
    </div>
  );
}

export default Secondary_footer;
