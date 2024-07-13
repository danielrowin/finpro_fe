import { Inter } from "next/font/google";
import Head from "next/head"
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>MiniMiracle</title>
      </Head>
      <body
        className={`${inter.className} bg-color-primary`}
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
