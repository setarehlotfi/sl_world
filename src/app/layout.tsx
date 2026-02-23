import type { Metadata } from "next";
import { cormorant, karla, dancingScript, playfair, specialElite } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "From Setareh's Sketch Book",
  description: "A personal world.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "From Setareh's Sketch Book",
    description: "A personal world.",
    images: ["/images/sl-world-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable} ${dancingScript.variable} ${playfair.variable} ${specialElite.variable}`}>
      <body>
        {/* Background texture layer */}
        <div className="canvas-texture" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
