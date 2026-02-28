import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Reliance Realty — Premium Real Estate",
    template: "%s | Reliance Realty",
  },
  description:
    "Corporate-grade real estate website with premium listings, trusted agents, and tailored services.",
  keywords: [
    "real estate",
    "property",
    "homes",
    "apartments",
    "luxury",
    "agents",
    "listings",
  ],
  metadataBase: new URL("https://example.com"),
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}>
        <Navbar />
        <main className="min-h-[calc(100vh-8rem)] pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
