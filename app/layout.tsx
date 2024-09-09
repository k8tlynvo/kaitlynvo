import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import NavBar from "./(components)/NavBar";
import Footer from "./(components)/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kaitlyn Vo Website",
  description: "Generated by Kaitlyn Vo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <div className="flex flex-col h-screen max-h-screen">
          <div className="flex-grow overflow-y-auto text-default-text bg-[#fce7f3]">
            <div className="flex bg-gradient-to-b from-neutral-50 from-20% justify-between px-10 py-16 m-4">
              <Header />
              {children}
              <NavBar />
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
