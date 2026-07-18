import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle's Portfolio — Windows Vista",
  description:
    "Kyle Huynh's personal portfolio, presented as a nostalgic Windows Vista desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
