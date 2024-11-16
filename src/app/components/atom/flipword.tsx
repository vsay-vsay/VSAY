import React from "react";
import { FlipWords } from "@/app/components/ui/flip-words";


interface FlipWordProps {
  flipword: string[];
  firstWord: string;
  lastWord: string;
}

export function FlipWord({flipword, firstWord, lastWord}: FlipWordProps) {
  // const words = ["better", "cute", "beautiful", "modern"];
  const words = flipword;

  return (
    <div className="py-[5rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
        {firstWord}
        <FlipWords words={words} /> <br />
        {lastWord}
      </div>
    </div>
  );
}
