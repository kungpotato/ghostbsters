import './globals.css'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import Navbar from '../components/navbar'

const prompt = Prompt({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={prompt.className}>
        <Navbar />
        <div className="pt-4">{children}</div>
      </body>
    </html>
  )
}
