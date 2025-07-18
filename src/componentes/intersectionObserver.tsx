"use client";

import { useState, useEffect } from "react";

export default function Observer(options?: IntersectionObserverInit) {
  const [sessao, setSessao] = useState("");

  useEffect(() => {
    const obeservar = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSessao(entry.target.id);
          }
        });
      },
      { threshold: 0.6, ...options }
    );

    const section = document.querySelectorAll("section");
    section.forEach((el) => {
      obeservar.observe(el);
    });

    return () => obeservar.disconnect();
  }, [options]);

  return sessao;
}
