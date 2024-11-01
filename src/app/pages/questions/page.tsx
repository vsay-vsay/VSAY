"use client";

import { BackgroundLines } from "@/app/components/ui/background-lines";
import { PlaceholdersAndVanishInput } from "@/app/components/ui/placeholders-and-vanish-input";
import { FloatingDockHome } from "@/app/components/atom/dock";

const Question: React.FC = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-12">
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4 pt-20">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black font-bold">
        Ask Anything From VSAY Team !
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
      <FloatingDockHome />
    </BackgroundLines>
    </>
    
  );
}

export default Question;