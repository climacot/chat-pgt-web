import './globals.css'
import { Nunito } from 'next/font/google'
import Aside from '@/components/aside'
import clsx from 'clsx'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Providers from './providers'
import type { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Chat PGT web',
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={clsx(nunito.className, 'grid h-screen grid-rows-body')}>
        <Providers>
          <Header />
          <section className="grid grid-cols-section overflow-hidden">
            <Aside />
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
