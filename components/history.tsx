import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { History as HistoryIcon } from 'lucide-react'
import { HistoryList } from './history-list'
import { Suspense } from 'react'
import { HistorySkeleton } from './history-skelton'
import { redirect } from 'next/navigation'

type HistoryProps = {
  location: 'sidebar' | 'header'
  currentSearchId: string
}

export default function History({ location, currentSearchId }: HistoryProps) {
  'use client'
  const handleClearHistory = () => {
    // Clear history logic here
    // After clearing history, redirect to the start of the search ID
    redirect(`/main/${currentSearchId}`)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn({
            'rounded-full text-foreground/30': location === 'sidebar'
          })}
        >
          {location === 'header' ? <Menu /> : <ChevronLeft size={16} />}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64 rounded-tl-xl rounded-bl-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1 text-sm font-normal mb-2">
            <HistoryIcon size={14} />
            History
          </SheetTitle>
        </SheetHeader>
        <div className="my-2 h-full pb-12 md:pb-10">
          <Suspense fallback={<HistorySkeleton />}>
            <HistoryList userId="anonymous" />
          </Suspense>
        </div>
        <Button onClick={handleClearHistory}>Clear History</Button>
      </SheetContent>
    </Sheet>
  )
}
