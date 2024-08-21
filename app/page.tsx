import Image from "next/image";
import { WordFadeInDemo } from "../components/wordFadein";
import { TypewriterEffectDemo } from "@/components/typewriter_component";
import ResearchSection from "@/components/research_content";
import DotPattern from "@/components/ui/dotPattern";  // Import the DotPattern component
import { DockDemo } from "../components/dock_component";
import BlurInDemo from "../components/blurInContent";
import { AnimatedListDemo } from "@/components/animated_list_component";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-100"> {/* Full viewport height for main */}
      {/* Background pattern */}
      <DotPattern
        width={40}
        height={40}
        className="absolute inset-0 z-0"  // Ensure background is behind content
      />

      {/* Container for text and image */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 w-full max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Word Fade In */}
            <WordFadeInDemo className="text-5xl text-center text-black mb-4" /> {/* Add text-black class and margin-bottom */}
            {/* Blur In */}
            <BlurInDemo />
          </div>
          <img
            alt="Portfolio Screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            className="w-full max-w-[24rem] h-auto rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]"
          />
        </div>
      </section>

      {/* Typewriter effect */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">
        <div className="flex justify-center">
          <TypewriterEffectDemo />
        </div>
      </section>

      {/* Research Section */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">
        <ResearchSection />
      </section>
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center p-8">
        <AnimatedListDemo/>
      </section>
      <DockDemo />
    </main>
  );
}
