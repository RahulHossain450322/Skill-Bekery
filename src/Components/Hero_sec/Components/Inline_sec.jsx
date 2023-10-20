import {} from "react";

function Inline_sec({ icon, title }) {
  return (
    <div className="border-2 border-slate-400 flex items-center py-3 rounded-xl justify-center text-lg">
      <div className="">{icon}</div>
      <p className="ms-3 text-slate-200 font-medium">{title}</p>
    </div>
  );
}

export default Inline_sec;
