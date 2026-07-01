import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import LenisProvider from "@/components/common/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivaraj S | Actor, Dance Instructor & Choreographer",
  description:
    "Explore the premium portfolio of Shivaraj S, professional Dance Instructor, Choreographer, and Actor. Delivering rhythm to life through elite choreography, wedding dances, and cinematic performances.",
  keywords:
    "Shivaraj S, Dancer, Choreographer, Actor, Wedding Choreography, Dance Instructor, Dhee, Bangalore, Shivs Cultural Academy",
  authors: [{ name: "Shivaraj S" }],
  openGraph: {
    title: "Shivaraj S | Actor, Choreographer & Dance Instructor",
    description:
      "Premium performance portfolio showcasing reality television landmarks, actor reels, workshops, and high-end choreography services.",
    url: "https://shivarajs.com",
    siteName: "Shivaraj S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-dark-bg text-white flex flex-col selection:bg-gold selection:text-dark-bg">
        <LenisProvider>
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
