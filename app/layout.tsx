import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400" , "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taste Bite | Sadaf Shahab",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Navbar
          logo="Taste Bite"
          page1="Home"
          page2="Menu"
          page3="Contact"
          page4="Order Online"
          registerBtn="Register"
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}
