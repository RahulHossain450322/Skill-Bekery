import {} from "react";
import Form from "./Components/Form";
import Description from "./Components/Description";

function Studio_des() {
  return (
    <div className="pt-40 container mx-auto">
      <div className="flex justify-between gap-20 md:flex-col lg:flex-row flex-col">
        <Form />
        <Description />
      </div>
    </div>
  );
}

export default Studio_des;
