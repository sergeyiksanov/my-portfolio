import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Sergey Iksanov",
  description: "Sergey Iksanov's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.className} dark`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
