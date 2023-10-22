import {} from "react";

function Subs_card() {
  return (
    <div className="bg-slate-100 text-black px-6 py-10 rounded-3xl ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="font-bold text-lg">€5.556 ($67)</p>
          <del className="ms-4">€7.500 ($73)</del>
        </div>
        <button className="px-4 text-white py-2 rounded-full bg-blue-500 text-lg">
          -20%
        </button>
      </div>
      <p className="text-2xl font-bold mt-6">
        Subscribe to a 12 month subscription with a discount
      </p>
      <div className="flex items-center lg:flex-row flex-col lg:space-y-0 space-y-6 mt-8">
        <button className="px-4 py-2 bg-green-400 text-slate-500 rounded-full w-full">
          Subscribe Now new for 12 Months at $100
        </button>
        <button className="px-4 py-2 bg-cyan-400 text-slate-500 rounded-full lg:ms-4 w-full">
          Subscribe Now new for 12 Months at $100
        </button>
      </div>
    </div>
  );
}

export default Subs_card;
