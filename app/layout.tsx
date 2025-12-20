import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['900'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Dare Centre',
  description: 'Dare Centre - Your Gateway to IIT',
  icons: {
    icon: '/dare1.png',
  },
}

import ChatWidget from './components/ChatWidget'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
        <Navigation />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}

