import {} from "react";

function Stay_inform() {
  return (
    <div className="container mx-auto mt-6 ">
      <div className="">
        <p className="text-6xl text-center text-slate-100">Stay Informed</p>
        <p className="mute_color text-center mt-4 text-lg">
          Be the first to receive notifications about new <br /> course and
          promotions
        </p>
      </div>
      <form className="mt-10 lg:w-4/12 mx-auto md:w-8/12 w-10/12">
        <input
          className="input_style"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="input_style mt-6"
          type="email"
          name="email"
          placeholder="Email"
        />
        <button className="bg_btn mt-6 w-full py-3 rounded-full text-slate-300 hover:text-slate-100">
          Subscribe
        </button>
        <p className="mute_color text-lg mt-6 text-center">
          By continuing, you agree to our{" "}
          <span className="text-white underline">Privacy Policy</span>
        </p>
      </form>
    </div>
  );
}

export default Stay_inform;
