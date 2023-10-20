import {} from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function Icons() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative flex items-center">
        <input
          type="search"
          className="bg_input w-56 px-3 py-2 rounded-full outline-none text-slate-100 placeholder-slate-100"
          placeholder="search"
          name="search"
        />
        <AiOutlineSearch className="text-3xl absolute right-0 text-white" />
      </div>
      <div className="flex items-center space-x-4">
        <AiOutlineShoppingCart className="text-3xl border-2 border-slate-400 p-1 rounded-full text-slate-100" />
        <AiOutlineUser className="text-3xl border-2 border-slate-400 p-1 rounded-full text-slate-100" />
      </div>
      <div className="">
        <button className="bg_btn px-4 py-2 rounded-full text-slate-100">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Icons;
