"use client";
import { CardStack } from "../components/ui/cardStack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full -mt-8"> {/* Adjust the margin-top here */}
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "PetrPages",
    designation: "UCI Hackathon",
    content: (
      <p>
        A social media web application that allows you to connect
        to other students at your school for general hangouts and
        productive study groups!
      </p>
    ),
  },
  {
    id: 4,
    name: "Jot Genius",
    designation: "LA Hacks",
    content: (
      <p>
        A new way to study and take notes. Jot Genius is a web application
        designed to embrace learning through playful games. Challenge youself
        on taking notes to an educational video and see how you can improve!
      </p>
    ),
  },
  {
    id: 3, //4
    name: "Yappr",
    designation: "Hack @ UCI",
    content: (
      <p>
        An AI chatbot on the terminal that can listen to and respond back to you
        in real time. Your everyday assistant all in the terminal to help you
        with your daily tasks!
      </p>
    ),
  },
  {
    id: 2,
    name: "Sepsis Analysis",
    designation: "Datathon",
    content: (
      <p>
        An analysis on the incidence and prevalence of sepsis. Including
        determinate factos that have strong correlation to the prevalence of sepsis
        as well as interesting discoveries on what may connect an individual to sepsis
        as well. Go through the life cycle of data through the lens of public health!
      </p>
    )
  },
  {
    id: 1, //2
    name: "Dublin Classification",
    designation: "Datathon",
    content: (
      <p>
        An analysis on the AirBNB housing market in Dublin Ireland.
        Explore and discover the unqieu and interesting trends that make
        a more attractive house and an excellent host on AirBNB through data!
      </p>
    )
  }
];
