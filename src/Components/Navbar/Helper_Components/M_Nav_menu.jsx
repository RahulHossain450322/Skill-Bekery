import {} from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
function M_Nav_menu() {
  return (
    <div className="relative">
      <div className=" absolute bg-slate-100 p-6 ">
        <ul className="list-none text-slate-500  space-y-3">
          <li className="">ALL COURSE</li>
          <li className="">FREE</li>
          <li className="">WEB DEVELOPMENT</li>
          <li className="">APP</li>
          <li className="">POPULAR</li>
        </ul>
        <div className="relative flex items-center">
          <input
            type="search"
            className="bg_input w-56 px-3 py-2 rounded-full outline-none text-slate-100 placeholder-slate-100 my-4"
            placeholder="search"
            name="search"
          />
          <AiOutlineSearch className="text-3xl absolute right-0 text-white" />
        </div>
        <div className="flex items-center space-x-4">
          <AiOutlineShoppingCart className="text-3xl border-2 border-slate-400 p-1 rounded-full text-slate-600 hover:bg_btn hover:border-transparent hover:text-green-500" />
          <AiOutlineUser className="text-3xl border-2 border-slate-400 p-1 rounded-full text-slate-600 hover:bg_btn hover:border-transparent hover:text-green-500" />
        </div>
        <div className="mt-4">
          <button className="w-full bg_btn px-4 py-2 rounded-full text-slate-100 hover:bg-transparent hover:border-2 hover:border-green-500 hover:text-slate-600 border-2 border-transparent">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default M_Nav_menu;
