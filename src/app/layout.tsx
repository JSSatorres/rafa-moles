import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rafa Moles Estilistas | Peluquera Armilla",
  description:
    "Rafa Moles Estilistas en Armilla. Tu estilo, nuestra pasión. Cortes de pelo, barba, color y tratamientos especializados.",
  keywords: [
    "peluquera armilla",
    "peluquería armilla",
    "estilista armilla",
    "corte de pelo armilla",
    "barbería armilla",
    "Rafa Moles",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
