import {} from "react";

function Subs_card() {
  return (
    <div className="bg-slate-100 text-black space-y-4 px-6 py-10 rounded-3xl ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="font-bold text-lg">€5.556 ($67)</p>
          <del className="ms-4">€7.500 ($73)</del>
        </div>
        <button className="px-4 py-2 rounded-full bg-blue-500 text-lg">
          -20%
        </button>
      </div>
      <p className="text-2xl font-bold">
        Subscribe to a 12 month subscription with a discount
      </p>
      <div className="flex items-center">
        <button className="px-4 py-2 bg-green-400 rounded-full">
          Subscribe Now new for 12 Months at $100
        </button>
        <button className="px-4 py-2 bg-pink-400 rounded-full ms-4">
          Subscribe Now new for 12 Months at €5.556
        </button>
      </div>
    </div>
  );
}

export default Subs_card;
