'use client'

import { BorderBeam } from '@/components/magicui/border-beam'
import TextShimmer from '@/components/magicui/text-shimmer'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/main')
  }

  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-5xl px-6 text-center md:px-8"
    >
      <div className="items-center justify-between text-7xl text-white transition-all ease-in group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="flex max-w-4xl items-center justify-center">
          <span className="text-7xl font-semibold">
            The next generation
            <br className="hidden md:block" /> Music Platform
          </span>
        </TextShimmer>
      </div>
      <p className="my-12 text-lg tracking-tight text-[#638dff] md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Start discovering hidden music gems in minutes.
        <br className="hidden md:block" /> with Morphic Music
      </p>
      <Button
        className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-black opacity-0 ease-in-out [--animation-delay:600ms]"
        onClick={handleRedirect}
      >
        <span>Start Searching.. </span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-three),var(--color-three),transparent_40%)] ${
            inView ? 'before:animate-image-glow' : ''
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />

          <Image
            src="/capture-240404_blk.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="relative w-full h-full rounded-[inherit] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
