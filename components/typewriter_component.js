"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    { text: "Get" },
    { text: "to" },
    { text: "know" },
    { text: "more" },
    { text: "about"},
    { text: "my:"}
  ];

  const loopWords = ["personality!", "hobbies!", "purchasing habits!", "music taste!", "git commits!", "movie taste!"];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect
        words={words}
        loopWords={loopWords} // Words to loop through
        loopSpeed={100} // Speed of typing in milliseconds
      />
    </div>
  );
}
