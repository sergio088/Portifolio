import React from "react";

export default function T2({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-slate-400 max-w-xs lg:max-w-full">{children}</p>
    </div>
  );
}
