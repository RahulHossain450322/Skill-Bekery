import {} from "react";
import "../../App.css";
import PC_slider from "./Slider/PC_slider";
import M_SLider from "./Slider/M_SLider";

function Card_sec() {
  return (
    <div className="container mx-auto ">
      <p className="text-lg text-white mb-6 popular">Popular</p>
      <PC_slider />
      <M_SLider />
    </div>
  );
}

export default Card_sec;
