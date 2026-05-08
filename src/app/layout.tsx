import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Boom Media — Restaurant & Service Industry Experts",
  description:
    "We help local businesses save time, reduce costs, and book more clients with smart AI Automated Workflows and fully managed online checkout systems.",
  keywords: "restaurant technology, AI automation, online ordering, POS systems, website design, web hosting, digital marketing",
  openGraph: {
    title: "Boom Media — Restaurant & Service Industry Experts",
    description: "AI Automation, Online Ordering, POS Systems & Web Services for Local Businesses.",
    url: "https://boommedia.us",
    siteName: "Boom Media",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: "#07090f", color: "#fff" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
