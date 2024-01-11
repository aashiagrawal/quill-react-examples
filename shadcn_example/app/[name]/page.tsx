'use client'
import { useContext } from 'react'
import { StyleContext } from '@/context/StyleContext'
import DashExample from '@/quill_components/DashboardExample'

export default function Home({ params }: { params: { name: string } }) {
  const { style, setStyle, showCode, setShowCode } = useContext(StyleContext);

  return (
    <main>
      <div>
        <DashExample uiname={decodeURIComponent(params.name)}></DashExample>
      </div>
    </main>
  )
}
