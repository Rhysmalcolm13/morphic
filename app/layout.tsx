'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { usePathname } from 'next/navigation'
import Particles from '@/components/magicui/particles'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export type RootLayoutProps = Readonly<{
  children: React.ReactNode
}> &
  Pick<Metadata, 'title' | 'description'> & {
    viewport?: Viewport
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const showSidebar = pathname.startsWith('/main')

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Particles
            className="absolute inset-0 -z-10 h-full"
            quantity={500}
            ease={70}
            size={0.05}
            staticity={40}
            color={'#638dff'}
          />
          {children}
          {showSidebar && <Sidebar isVisible={false} currentSearchId={''} />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
