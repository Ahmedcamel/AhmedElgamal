import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Dalya Baron | Astronomy',
  description: 'Dalya Baron: a graduate student at the Tel Aviv University Astrophysics Department. Interested in galaxy evolution, Active Galactic Nuclei, and machine learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.className} flex flex-col min-h-full bg-[rgb(243,243,243)]`}>
      <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
