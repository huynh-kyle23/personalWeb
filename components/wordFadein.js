
import WordFadeIn from "../components/ui/wordFadein";

export function WordFadeInDemo({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <WordFadeIn words="Hi! My name is Kyle!" className="text-black" /> {/* Pass text-black class */}
    </div>
  );
}

