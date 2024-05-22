import ClientSection from '@/components/landing/client-section'
import HeroSection from '@/components/landing/hero-section'
import Particles from '@/components/magicui/particles'
import { SphereMask } from '@/components/magicui/sphere-mask'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Morphic Music',
  description: 'Discover hidden gems in the music industry'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default async function Page() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <SiteFooter />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={500}
        ease={70}
        size={0.05}
        staticity={40}
        color={'#638dff'}
      />
    </>
  )
}
