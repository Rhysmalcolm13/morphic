import { Chat } from '@/components/chat'
import { nanoid } from 'ai'
import { AI } from '@/app/actions'
import { SiteHeader } from '@/components/site-header'
import { Sidebar } from '@/components/sidebar'

export const maxDuration = 60

export default function Page() {
  const id = nanoid()
  return (
    <>
      <SiteHeader />
      <div style={{ display: 'flex flex-col', height: '100vh' }}>
        <Sidebar isVisible={true} currentSearchId={''} />
        <main>
          <AI initialAIState={{ chatId: id, messages: [] }}>
            <Chat id={id} />
          </AI>
        </main>
      </div>
    </>
  )
}
