import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import EnquireFloat from '@/components/EnquireFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adlotech - Python Full Stack Training Program',
  description: 'Build real-world programming skills with industry experts. Career-focused technology training powered by AdstraDigital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <EnquireFloat />
      </body>
    </html>
  )
}
