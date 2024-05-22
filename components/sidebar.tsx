'use client'

import History from './history'

export function Sidebar({
  isVisible,
  currentSearchId
}: {
  isVisible: boolean
  currentSearchId: string
}) {
  return (
    <div
      className={`h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 ${
        isVisible ? 'flex' : 'hidden'
      } sm:flex`}
    >
      <History location="sidebar" currentSearchId={currentSearchId} />
    </div>
  )
}
