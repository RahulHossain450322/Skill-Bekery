import {} from "react";
import Subs_card from "./Subs_card";

function Subscription() {
  return (
    <div className="text-white container mx-auto py-24">
      <div className="text-center">
        <p className="text-6xl">Subscriptions</p>
        <p className="text-gray-300 text-lg mt-5">
          Provides access to all courses on our platform
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 my-14">
        <Subs_card />
        <Subs_card />
      </div>
    </div>
  );
}

export default Subscription;
