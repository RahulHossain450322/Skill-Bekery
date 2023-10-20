import {} from "react";
import Pleasure from "./Components/Pleasure";
import Do_SubsCribe from "./Components/Do_SubsCribe";
import Lesson_video from "./Components/Lesson_video";

function Learn() {
  return (
    <div className="py-24 container mx-auto">
      <Pleasure />
      <Do_SubsCribe />
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
        <Lesson_video />
      </div>
    </div>
  );
}

export default Learn;
