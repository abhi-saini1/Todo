import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialLinks from "@/Components/Ui/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700 `}>
      <SocialLinks/>
      {children}
      </body>
    </html>
  );
}
