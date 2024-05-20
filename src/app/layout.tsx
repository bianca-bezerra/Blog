import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blanca",
  description: "Blog da Bianca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex flex-col h-full min-h-screen w-screen justify-between pl-52 pr-52">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
