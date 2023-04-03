import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import './globals.css'

const font = Nunito({
  subsets : ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
