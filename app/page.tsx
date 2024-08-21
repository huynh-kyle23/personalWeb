import Image from "next/image";
import  {WordFadeInDemo}  from "../components/wordFadein";
import { TypewriterEffectDemo } from "@/components/typewriter_component";
import ResearchSection from "@/components/research_content";
export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-center p-8 space-y-16"> {/* Center all content vertically and horizontally */}
      
      {/* Container for text and image */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"> {/* Centered flex layout */}
        <div className="flex-1 flex items-center justify-center">
          <WordFadeInDemo className="text-5xl text-center" />
        </div>
        <img
          alt="Portfolio Screenshot"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          className="w-full max-w-[24rem] h-auto rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]"
        />
      </div>
      
      {/* Typewriter effect */}
      <article>
        <div className="flex justify-center mt-10">
          <TypewriterEffectDemo />
        </div>
      </article>
      
      {/* Research Section */}
      <div className="w-full mt-20 flex justify-center">
        <ResearchSection />
      </div>
      
    </main>
  );
}