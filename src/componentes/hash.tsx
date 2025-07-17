"use client";
import { useState, useEffect } from "react";

export default function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const pegaHash = () => {
      setHash(window.location.hash);
    };

    pegaHash();

    window.addEventListener("hashchange", pegaHash);

    return () => {
      window.removeEventListener("hashchange", pegaHash);
    };
  }, []);

  return hash;
}
