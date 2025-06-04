import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Tek bir metadata objesi olacak!
export const metadata: Metadata = {
  title: "Gedikli Hukuk Bürosu",
  description: "Gedikli Hukuk Bürosu Resmi Web Sitesi",
  icons: {
    icon: "/favicon.ico/favicon.ico",
  },
};

// ✅ Fontlar
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source',
  display: 'swap',
});

// ✅ Layout bileşeni
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${libreBaskerville.variable} ${sourceSans.variable}`}>
      <body className="antialiased font-body" suppressHydrationWarning>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
