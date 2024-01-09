'use client'
import DashExample from '@/quill_components/DashboardExample'

export default function Home({ params }: { params: { name: string } }) {
  return (
    <main>
      <div>
        <DashExample uiname={decodeURIComponent(params.name)}></DashExample>
      </div>
    </main>
  )
}
