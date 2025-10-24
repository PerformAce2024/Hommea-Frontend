import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "HOMMEA - Luxury Real Estate & Green Living",
  description: "Explore Hommea Collections of residential designs. Premium eco-villa communities with sustainable luxury living.",
  keywords: ["luxury real estate", "eco villas", "green living", "premium properties", "sustainable homes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}