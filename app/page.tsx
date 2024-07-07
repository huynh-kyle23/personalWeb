import Image from "next/image";
import ContentSection from "../components/content_section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-25">
      <ContentSection /> 
    </main>
  );
}
