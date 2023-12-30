import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import logo from "@/public/logo/white-transparent2.png"

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin']})


export const metadata: Metadata = {
  title: 'FreshTopsLily',
  description: 'Fashions & Crafts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/assets/white.jpg" type="image/x-icon" sizes='any' />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
