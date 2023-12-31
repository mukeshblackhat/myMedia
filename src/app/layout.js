import './globals.css'
import { Inter } from 'next/font/google'
import {Providers} from '../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Media',
  description: 'lets explore with your pics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
