import type { Metadata } from "next";
import { cormorant, karla } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SL World",
  description: "A personal world.",
  openGraph: {
    title: "SL World",
    description: "A personal world.",
    images: ["/images/sl-world-oval.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
