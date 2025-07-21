import React from "react";

interface props {
  img?: React.ReactNode;
  t: string;
  c: string[];
}

export default function Cardskills({ img, t, c }: props) {
  return (
    <div className="flex border border-violet-500 bg-violet-900/5 h-1/6 mb-10 lg:h-1/3 w-full rounded lg:mb-14">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-10 w-full">
          <div className="text-slate-100 bg-violet-700 rounded-full p-px">
            <div className="size-8 flex items-center justify-center">{img}</div>
          </div>

          <h1 className="text-slate-200 font-semibold">{t}</h1>
        </div>
        <div className="flex space-x-5">
          {c.map((item, index) => (
            <p
              key={index}
              className="bg-violet-600/30 px-2 py-1 w-fit text-slate-100 rounded-2xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
