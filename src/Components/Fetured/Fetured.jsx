import {} from "react";
import Course from "./Components/Course";
import Course_des from "./Components/Course_des";
import image_1 from "./Components/Images/image 40.png";
import image_2 from "./Components/Images/image 35.png";
import image_3 from "./Components/Images/image 36.png";
import image_4 from "./Components/Images/image 41.png";
import image_5 from "./Components/Images/image 37.png";
import image_6 from "./Components/Images/image 39.png";
function Fetured() {
  return (
    <div className=" container mx-auto">
      <Course />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Course_des img={image_1} />
        <Course_des img={image_2} />
        <Course_des img={image_3} />
        <Course_des img={image_4} />
        <Course_des img={image_5} />
        <Course_des img={image_6} />
      </div>
    </div>
  );
}

export default Fetured;
