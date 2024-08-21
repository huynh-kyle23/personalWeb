// WordFadeInDemo.tsx
import WordFadeIn from "./ui/wordFadein";

export function WordFadeInDemo({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <WordFadeIn words="Hi! My name is Kyle!" />
    </div>
  );
}
