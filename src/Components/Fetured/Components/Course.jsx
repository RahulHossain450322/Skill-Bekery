import {} from "react";

function Course() {
  return (
    <div className="">
      <p className="header_title">Featured Courses</p>
      <div className="my-16 grid lg:grid-cols-5 grid-cols-2 gap-8 text-center">
        <p className="border-2 border-gray-600 px-4 py-3 rounded-full mute_color hover:bg_btn hover:border-0 hover:text-white">
          All Course
        </p>
        <p className="border-2 border-gray-600  px-4 py-3 rounded-full mute_color hover:bg_btn hover:border-transparent hover:text-white">
          Free Course
        </p>
        <p className="border-2 border-gray-600  px-4 py-3 rounded-full mute_color hover:bg_btn hover:border-transparent hover:text-white">
          Web Development
        </p>
        <p className="border-2 border-gray-600  px-4 py-3 rounded-full mute_color hover:bg_btn hover:border-transparent hover:text-white">
          App Development
        </p>
        <p className="border-2 border-gray-600  px-4 py-3 rounded-full mute_color hover:bg_btn hover:border-transparent hover:text-white">
          Popular Course
        </p>
      </div>
    </div>
  );
}

export default Course;
