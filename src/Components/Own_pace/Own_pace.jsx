import {} from "react";
import Study_method from "./Study_method";
import icons_1 from "./Icons/Mask group@2x.png";
import icons_2 from "./Icons/Arrow 1.png";
import icons_3 from "./Icons/fontisto_dollar.png";
function Own_pace() {
  return (
    <div className=" pb-24">
      <div className="container mx-auto">
        <p className="text-6xl text-center text-slate-100">
          Study at your own pace
        </p>
        <div className="grid lg:grid-cols-3 col-span-1">
          <Study_method
            img={icons_1}
            title={"Flexible Study"}
            des={"Learn at your own pace, anytime, anywhere"}
          />
          <Study_method
            img={icons_2}
            title={"Study Upon Payment"}
            des={"Instant access to your choosen course"}
          />
          <Study_method
            img={icons_3}
            title={"Complatation certificate"}
            des={"Get recognized for your course achivements"}
          />
        </div>
      </div>
    </div>
  );
}

export default Own_pace;
