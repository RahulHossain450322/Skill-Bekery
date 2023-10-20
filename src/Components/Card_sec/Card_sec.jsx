import {} from "react";
import "../../App.css";
import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
function Card_sec() {
  return (
    <div className="container mx-auto ">
      <p className="text-lg text-white mb-6 popular">Popular</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <Card_1 />
        <Card_2 />
        <Card_3 />
      </div>
    </div>
  );
}

export default Card_sec;
