// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "SI88 Limited - Global Trade & Brand Development",
  description: "SI88 Limited is an international trading and brand development company connecting markets across Africa, Asia, and the global marketplace.",
  keywords: "international trading, brand development, global business, import export, strategic procurement",
  openGraph: {
    title: "SI88 Limited - Global Trade & Brand Development",
    description: "An international trading and brand development company connecting markets across Africa, Asia, and the global marketplace.",
    url: "https://si88limited.com",
    siteName: "SI88 Limited",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI88 Limited - Global Trade & Brand Development",
    description: "An international trading and brand development company connecting markets across Africa, Asia, and the global marketplace.",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
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