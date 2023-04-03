import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

import './globals.css'
import ClientOnly from "./components/ClientOnly";

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
        <ClientOnly>
          <Modal title="Hello World" isOpen/>
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
