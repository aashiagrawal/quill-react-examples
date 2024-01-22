'use client'
import { StyleContext } from '@/context/StyleContext';
import DashExample from '@/components/quill_components/DashboardExample'
import { useContext, useEffect, useState } from 'react';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
import 'highlight.js/styles/default.css';
import CodeSnippetContainter from '@/components/CodeSnippetContainer';
import { LibraryNameContext } from './layout';

export default function Home() {
  // const { style, setStyle, showCode, setShowCode } = useContext(StyleContext);
  const [ style, setStyle, showCode, setShowCode ] = useContext(LibraryNameContext);

  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'row', transition: 'flex 0.5s ease' }}>
        <div style={{ flex: showCode ? 1 : 2 }}>
          <DashExample />
        </div>
        {showCode && (
        <div style={{ flex: 0.4, marginLeft: '20px', transition: 'flex 0.5s ease', overflowY: 'scroll', borderRadius: '8px', marginTop: '20px', padding: "10px", marginRight: "20px", borderWidth:'1px' }}>
          <CodeSnippetContainter component="dashboard" style={style}></CodeSnippetContainter>
        </div>
      )}
      </div>
    </main>
  );
  
}
