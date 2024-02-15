import { Roboto } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"],
                      weight: '700'})
const roboto = Roboto({ subsets: ["latin"],
                        weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Brainwave.io",
  description: "Brainwave.io - landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${rubik.className} bg-white`}>{children}</body>
    </html>
  );
}
