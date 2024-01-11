"use client"
import React, {useContext} from 'react'
import ReportBuilderExample from '@/quill_components/ReportBuilderExample'
import CodeSnippetContainter from '@/components/CodeSnippetContainter'
import { StyleContext } from '@/context/StyleContext';

const page = () => {
  const { style, setStyle, showCode, setShowCode } = useContext(StyleContext);
  return (
      <main>
        <div style={{ display: 'flex', flexDirection: 'row', transition: 'flex 0.5s ease' }}>
          <div style={{ flex: showCode ? 1 : 2 }}>
            <ReportBuilderExample />
          </div>
          {showCode && (
          <div style={{ flex: 0.4, marginLeft: '20px', transition: 'flex 0.5s ease', overflow: 'auto', borderRadius: '8px', marginTop: '20px', padding: "10px", marginRight: "20px", borderWidth:'1px' }}>
            <CodeSnippetContainter component="reportbuilder" style={style}></CodeSnippetContainter>
          </div>
        )}
        </div>
      </main>
  )
}

export default page