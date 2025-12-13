import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='dark'
          forcedTheme='dark'>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
