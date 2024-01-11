"use client"
import React, {useContext} from 'react'
import SQLEditorExample from '@/quill_components/SQLEditorExample'
import { StyleContext } from '@/context/StyleContext';
import CodeSnippetContainter from '@/components/CodeSnippetContainter';
import ReportBuilderExample from '@/quill_components/ReportBuilderExample';

const page = () => {
  const { style, setStyle, showCode, setShowCode } = useContext(StyleContext);
  console.log("this is showCode line 9: ", showCode);
  // return (
  //   <main>
  //     <div style={{ display: 'flex', flexDirection: 'row', transition: 'flex 0.5s ease' }}>
  //       <div style={{ flex: showCode ? 1 : 2 }}>
  //         <SQLEditorExample />
  //       </div>
  //       {showCode && (
  //       <div style={{ flex: 0.4, marginLeft: '20px', transition: 'flex 0.5s ease', overflow: 'auto' }}>
  //         <CodeSnippetContainter component="sqleditor" style={style}></CodeSnippetContainter>
  //       </div>
  //     )}
  //     </div>
  //   </main>
  // )
  return (
    <main style={{ width: '75%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', transition: 'flex 0.5s ease' }}>
        <div style={{ flex: showCode ? 1 : 2 }}>
          <SQLEditorExample />
        </div>
        {showCode && (
          <div style={{ flex: 0.4, marginLeft: '20px', transition: 'flex 0.5s ease', overflow: 'auto', borderRadius: '8px', marginTop: '20px', padding: "10px", marginRight: "20px", borderWidth:'1px' }}>
              <CodeSnippetContainter component="sqleditor" style={style}></CodeSnippetContainter>
          </div>
        )}
      </div>
    </main>
)
}

export default page