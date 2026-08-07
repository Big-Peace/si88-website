// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Scene3D from "./components/Scene3D";
import PageTransition from "./components/PageTransition";
import { Inter, Fraunces } from 'next/font/google';

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "SI88 Limited - Corporate 3D Website | Global Trade & Brand Development",
  description: "SI88 Limited is an international trading and brand development company connecting markets across Africa, Asia, and the global marketplace. Building value across industries through excellence, innovation, and long-term growth.",
  keywords: "international trading, brand development, global business, import export, strategic procurement, SI88 Limited, Africa business, global markets, corporate 3D website",
  openGraph: {
    title: "SI88 Limited - Corporate 3D Website",
    description: "An international trading and brand development group connecting businesses across Africa, Asia, and global markets.",
    url: "https://si88limited.com",
    siteName: "SI88 Limited",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI88 Limited - Corporate 3D Website",
    description: "An international trading and brand development group connecting businesses across Africa, Asia, and global markets.",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0b" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <Scene3D />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}