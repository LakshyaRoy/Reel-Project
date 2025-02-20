import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "Best Speaker Reels | Watch & Share Viral Speaker Videos",
  description: "Best Speaker Reels | Watch & Share Viral Speaker Videos",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
