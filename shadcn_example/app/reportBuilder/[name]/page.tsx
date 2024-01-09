"use client"
import React from 'react'
import ReportBuilderExample from '@/quill_components/ReportBuilderExample'

const page = ({ params }: { params: { name: string } }) => {

  return (
    <div>
      <ReportBuilderExample uiname={ decodeURIComponent(params.name)}></ReportBuilderExample>
    </div>
  )
}

export default page