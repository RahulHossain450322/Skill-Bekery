import {} from "react";
import Compliments from "./Components/Compliments";

function Student_Comments() {
  return (
    <div className="container mx-auto mt-24">
      <div className="">
        <p className="header_title">What Students Say</p>
        <p className="mute_color text-center mt-3">
          The path to success in development
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
        <Compliments />
        <Compliments />
        <Compliments />
      </div>
    </div>
  );
}

export default Student_Comments;
