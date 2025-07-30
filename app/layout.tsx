import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lieder",
  description: "Lieder Service verhuisbedrijf & ladderlift in Antwerpen Snel, veilig en betrouwbaar verhuizen",
  icons : {
    icon : '/logo.jpeg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
