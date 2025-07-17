"use client";
import React from "react";
import useHash from "./hash";

interface props {
  children: React.ReactNode;
  id: string;
}

export default function L({ children, id }: props) {
  const hash = useHash();
  const isActive = hash === `${id}`;

  console.log(isActive);
  return (
    <a href={id} className="flex items-center group py-3 active">
      <span
        className={`nav-indicator inline-block mr-4 h-[1px] w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200
group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
          isActive ? "w-16 bg-slate-200" : ""
        }`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest
         text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
           isActive ? "text-slate-200 " : ""
         }`}
      >
        {children}
      </span>
    </a>
  );
}
