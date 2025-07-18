"use client";
import React from "react";
import Observer from "./intersectionObserver";

interface props {
  children: React.ReactNode;
  id: string;
}

export default function L({ children, id }: props) {
  const sessao = Observer();
  const isActive = `#${sessao}` === id;

  console.log(isActive);
  return (
    <a href={id} className="flex items-center group py-3 active">
      <span
        className={`nav-indicator inline-block mr-4 h-[1px] w-8  transition-all group-hover:w-16 group-hover:bg-slate-200
  ${isActive ? "w-16 bg-slate-200" : "bg-slate-400"}`}
      ></span>
      <span
        className={`nav-text text-xs font-bold uppercase tracking-widest
          group-hover:text-slate-200  ${
            isActive ? "text-slate-200 " : "text-slate-400"
          }`}
      >
        {children}
      </span>
    </a>
  );
}
