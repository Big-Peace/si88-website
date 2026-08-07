// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export const metadata = {
  title: "SI88 Limited - Global Trading & Brand Development Group",
  description: "SI88 Limited is an international trading and brand development group connecting businesses across Africa, Asia, and global markets. Building value across industries through excellence, innovation, and long-term growth.",
  keywords: "international trading, brand development, global business, import export, strategic procurement, SI88 Limited, Africa business, global markets",
  openGraph: {
    title: "SI88 Limited - Global Trading & Brand Development Group",
    description: "An international trading and brand development group connecting businesses across Africa, Asia, and global markets.",
    url: "https://si88limited.com",
    siteName: "SI88 Limited",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI88 Limited - Global Trading & Brand Development Group",
    description: "An international trading and brand development group connecting businesses across Africa, Asia, and global markets.",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}