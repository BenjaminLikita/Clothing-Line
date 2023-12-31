import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin']})


export const metadata: Metadata = {
  title: 'FreshTopsLily',
  description: 'Fashions & Crafts'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
