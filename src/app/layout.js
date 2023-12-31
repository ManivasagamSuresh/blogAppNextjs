import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from '@/context/themeContext'
import ThemeProvider from '@/components/Providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MB Blog',
  description: 'Blog to know about Vas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
        <ThemeProvider>
        <div className='container'>
          <div className='wrapper'>
          <Navbar/>
           {children}
           <Footer/>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
