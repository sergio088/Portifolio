import React from "react";

export default function T1({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:hidden ">
      <h2 className="text-slate-200 text-[20px]">{children}</h2>
    </div>
  );
}
