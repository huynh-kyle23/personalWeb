"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../components/ui/animated_list";
import { CardStackDemo } from "./card_stack_component";
import DotPattern from "./ui/dotPattern";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "PetrPages                                                      ",
    description: "React, Python, SQL",
    time: "",
    icon: "💬",
    color: "#00C9A7",
  },
  {
    name: "JotGenius                                                      ",
    description: "Next, Python, pocketBase",
    time: "",
    icon: "🧠",
    color: "#FFB800",
  },
  {
    name: "Yappr                                                          ",
    description: "Python, OpenAI",
    time: "",
    icon: "🗣️",
    color: "#FF3D71",
  },
  {
    name: "Sepsis Analysis                                                 ",
    description: "Jupyter, matplotlib, pandas, SQL",
    time: "",
    icon: "🦠",
    color: "#6A5ACD",
  },
  {
    name: "Dublin Classification                                            ",
    description: "matplotlib, plotly, pandas, scikitlearn",
    time: "",
    icon: "🏡",
    color: "#8A2BE2",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-4", // Increased max-w
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white text-black [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", // Added text-black
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex items-center justify-center rounded-2xl p-2"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-black"> {/* Ensured text is black */}
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-black">{description}</p> {/* Ensured text is black */}
        </div>
      </div>
    </figure>
  );
};


export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className="relative flex h-[500px] w-full p-6 overflow-hidden rounded-lg bg-white">
      <DotPattern
        width={40}
        height={40}
        className="absolute inset-0 z-0"  // Ensure the dot pattern is behind content
      />
      <div className="relative flex flex-row w-full space-x-4 z-10">
        {/* Animated List */}
        <div className="flex-1 max-w-full">
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
        {/* Card Stack */}
        <CardStackDemo />
      </div>
    </div>
  );
}