import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  // Sort the cards by ID in increasing order
  const sortedItems = [...items].sort((a, b) => a.id - b.id);
  const [cards, setCards] = useState<Card[]>(sortedItems);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!); // Move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 "> {/* "dark" class added here */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-black  h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR, // Decrease scale for cards that are behind
            zIndex: cards.length - index, // Decrease z-index for the cards that are behind
          }}
        >
          <div className="font-normal text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 text-white">
              {card.name}
            </p>
            <p className="text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};