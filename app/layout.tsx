import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; // Importing the font we will be using
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Blog",
  description: "Blog built in Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}> {/* Since we target the whole HTML document our font is now Open Sans*/}
      <body>{children}</body>  
    </html>
  );
}
