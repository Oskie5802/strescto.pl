import { Fraunces, Manrope } from 'next/font/google'

const fraunces = Fraunces({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fraunces',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Strescto - Streszczenia Lektur',
  description: 'Twoje centrum streszczeń lektur. Szybko, konkretnie i na temat.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${manrope.variable}`}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#F2F0E9', color: '#232323' }}>
        {children}
      </body>
    </html>
  )
}
