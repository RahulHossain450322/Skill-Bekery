import {} from "react";

function Lesson_video() {
  return (
    <div className="mt-24">
      <iframe
        className="w-full"
        height="315"
        src="https://www.youtube.com/embed/gfkTfcpWqAY?si=1fu8M4cGFV2TlqA6"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p className="text-lg font-bold text-slate-200 mt-6">
        C# Developers: Exploring the Fascinating History the C# and
        .NET.Framework
      </p>
      <p className="mute_color text-sm mt-2">SkillBekery Studio</p>
    </div>
  );
}

export default Lesson_video;
