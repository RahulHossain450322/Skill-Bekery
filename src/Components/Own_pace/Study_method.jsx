import {} from "react";

function Study_method({ img, title, des }) {
  return (
    <div className=" text-center mt-14">
      <div className="">
        <img className="w-12 mx-auto" src={img} />
        <p className="text-xl text-slate-100 mt-6">{title}</p>
        <p className="text-gray-400 mt-4">{des}</p>
      </div>
    </div>
  );
}

export default Study_method;
