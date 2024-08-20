"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  loopWords, // Array of words to loop
  loopSpeed = 100, // Speed of the typewriter effect for the last word (ms)
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  loopWords?: string[]; // Array of words to loop
  loopSpeed?: number; // Speed of the typewriter effect for the last word
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);
  const [currentLoopWord, setCurrentLoopWord] = useState<string[]>([]);
  const [typing, setTyping] = useState(true);
  const [isSentenceComplete, setIsSentenceComplete] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView && loopWords) {
      if (!isSentenceComplete) {
        animateSentence();
      } else {
        const loopInterval = setInterval(() => {
          if (typing) {
            setCurrentLoopWord((prev) => [
              ...prev,
              loopWords[currentLoopIndex][prev.length],
            ]);

            if (currentLoopWord.length === loopWords[currentLoopIndex].length) {
              setTyping(false);
            }
          } else {
            setCurrentLoopWord((prev) => prev.slice(0, -1));

            if (currentLoopWord.length === 0) {
              setTyping(true);
              setCurrentLoopIndex(
                (prevIndex) => (prevIndex + 1) % loopWords.length
              );
            }
          }
        }, loopSpeed);

        return () => clearInterval(loopInterval);
      }
    }
  }, [
    isInView,
    currentLoopIndex,
    typing,
    loopWords,
    loopSpeed,
    currentLoopWord,
    isSentenceComplete,
  ]);

  const animateSentence = async () => {
    await animate(
      "span",
      {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      },
      {
        duration: 0.3,
        delay: (index) => index * 0.1,
        ease: "easeInOut",
      }
    );
    setIsSentenceComplete(true);
  };

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                `text-gray-800 opacity-0 hidden`,
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
      {isSentenceComplete && (
        <div className="inline-block">
          {currentLoopWord.map((char, index) => (
            <motion.span
              key={`loop-char-${index}`}
              className={cn(`text-gray-800`)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-gray-800",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
