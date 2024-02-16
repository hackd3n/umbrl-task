import { Urbanist } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"],
                      weight: '700'})
const urbanist = Urbanist({ subsets: ["latin"],
                        weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Brainwave.io",
  description: "Brainwave.io - landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${rubik.className} bg-white text-black scroll-smooth`}>{children}</body>
    </html>
  );
}
