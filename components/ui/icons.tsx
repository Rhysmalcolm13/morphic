'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<typeof Image>) {
  const { src = '/favicon.png', width = 10, height = 10, ...restProps } = props
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={cn(className)}
      {...restProps}
    />
  )
}

export { IconLogo }
