import type { Metadata } from "next";
import { libreCaslon, karla, dancingScript, playfair, specialElite, courierPrime } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://setareh.us"),
  title: "From Setareh's Sketch Book",
  description: "A personal gazette by SL on random creative work and gentle ai research.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "From Setareh's Sketch Book",
    description: "A personal gazette by SL on random creative work and gentle ai research.",
    type: "website",
    url: "https://setareh.us",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SL World — an oval illustration of a garden scene with a tree, a person on a ladder, a wicker chair, and a basket of fruit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Setareh's Sketch Book",
    description: "A personal gazette by SL on random creative work and gentle ai research.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreCaslon.variable} ${karla.variable} ${dancingScript.variable} ${playfair.variable} ${specialElite.variable} ${courierPrime.variable}`}>
      <body>
        {/* Background texture layer */}
        <div className="canvas-texture" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
