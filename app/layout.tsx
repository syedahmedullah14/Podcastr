import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexcClerkProvider";
import AudioProvider from "./providers/AudioProvider";

const manrop = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}></body>
      <ConvexClerkProvider>
        <AudioProvider>

        {children}
        </AudioProvider>

      </ConvexClerkProvider>
    </html>
  );
}
