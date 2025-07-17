import React from "react";

export default function T1({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:hidden ">
      <h2 className="text-slate-200 text-lg tracking-tight font-medium sm:text-xl">
        {children}
      </h2>
    </div>
  );
}
