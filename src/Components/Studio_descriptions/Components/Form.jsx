import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("All filleds are required!");
    }
  };
  return (
    <section className="bg-slate-100 lg:p-10 md:p-10 px-4 py-10 rounded-xl lg:w-1/2">
      <div className="text-center">
        <BiSolidUser className="text-6xl text-blue-500 mx-auto" />
        <p className="font-thin md:text-3xl lg:text-5xl text-2xl text-blue-500 mt-2">
          Welcome Back
        </p>
        <p className="mt-2 text-slate-500">Provide your log in Credintials </p>
      </div>
      <form onSubmit={submit} className="mt-6">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input_style"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input_style mt-6"
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="mt-4 flex items-center">
          <input className="" type="checkbox" />
          <p className="ms-2 text-slate-500">I accepts all the terms</p>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg_btn w-full px-0 py-3 text-slate-100 rounded-full hover:bg-transparent border-2 hover:border-gray-300 hover:text-black"
          >
            Log in
          </button>
          <p className="text-center mt-4 text-slate-500">
            I forgot my password
            <span className="font-bold"> Reset</span>
          </p>
          <button className="border-2 border-slate-300 w-full py-3 rounded-full mt-5 text-slate-500 hover:bg-blue-500 hover:text-slate-50">
            Create a New Account
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
