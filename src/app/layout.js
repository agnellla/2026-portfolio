import { Urbanist, Fredoka, Petit_Formal_Script } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
})

const petitFormal = Petit_Formal_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-petit-formal-script',
  display: 'swap',
})

export const metadata = {
  title: 'Agnella Agrata | Data & Design',
  description: 'Portfolio of Agnella Agrata — bridging analytical thinking and creative design to solve data-driven problems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${urbanist.variable} ${fredoka.variable} ${petitFormal.variable}`}>
      <body className={`${urbanist.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
