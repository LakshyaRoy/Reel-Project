import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Best Funny Reels | Watch & Share Viral Videos</title>
        <meta
          name="description"
          content="Enjoy the funniest reels and short videos. Watch, share, and laugh with the best viral content online!"
        />
        <meta
          name="keywords"
          content="funny reels, short videos, viral videos, comedy clips, trending reels"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
