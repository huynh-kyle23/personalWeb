"use client";

import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 5000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray],
    );

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
    const animations = {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1, originY: 0 },
      exit: { scale: 0.8, opacity: 0 },
      transition: { type: "spring", stiffness: 300, damping: 30 },
    };
  
    return (
      <motion.div
        {...animations}
        layout
        className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full" // Full width within its container
        style={{
          width: '90%', // Adjust width to be a percentage of its container
          marginLeft: '0', // Pushes the item to the left
          marginRight: 'auto', // Ensures no space on the right
          position: 'relative', // Allows for positioning adjustments
          right: '0', // Ensures it aligns to the left
        }}
      >
        {children}
      </motion.div>
    );
  }
  
  
