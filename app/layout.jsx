// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SI88 Limited - Global Trading & Brand Development",
  description: "SI88 Limited is an international trading and brand development company connecting businesses across Africa, Asia, and the wider global marketplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}