"use client"
import React from 'react'
import SQLEditorExample from '@/quill_components/SQLEditorExample'

const page = ({ params }: { params: { name: string } }) => {
  return (
    <div>
      <SQLEditorExample uiname={ decodeURIComponent(params.name)}></SQLEditorExample>
    </div>
  )
}

export default page