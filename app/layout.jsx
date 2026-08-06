// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "SI88 Limited - Global Trading & Brand Development",
  description: "SI88 Limited is an international trading and brand development company connecting businesses across Africa, Asia, and the wider global marketplace.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}