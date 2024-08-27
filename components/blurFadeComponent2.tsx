"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "./hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import BlurFade from "../components/ui/blurfade";

const cards = [
  {
    description: "Made w/ Plotly",
    title: "My Mbti Compatability",
    src: "/mbtiGraph.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
  },
  {
    description: "Made w/ Plotly",
    title: "My Favorite Hobbies",
    src: "/HobbiesGraph.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
  },
  {
    description: "Made w/ Tableau",
    title: "My Purchasing History",
    src: "/PurchaseHistory.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
  },
];

export function BlurFadeDemo2() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[2000]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[2000]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[800px] h-full md:h-fit flex items-center justify-center bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden z-[2000]"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <BlurFade
            key={card.title}
            delay={0.25 + index * 0.05}
            inView
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            variant={{
              hidden: { opacity: 0.8, filter: 'blur(4px)' },
              visible: { opacity: 1, filter: 'blur(0px)' },
            }}
          >
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              className={`flex gap-4 flex-col w-full ${active === card ? 'z-[2000]' : 'z-10'}`}
              onClick={() => setActive(card)}
            >
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-80 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base hover:text-white transition-colors"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base hover:text-white transition-colors"
                >
                  {card.description}
                </motion.p>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
