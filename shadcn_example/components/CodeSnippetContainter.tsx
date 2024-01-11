import React, {useState, useEffect} from 'react'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
import 'highlight.js/styles/default.css';
import codeSnippets from "../code-snippets.json";

interface CodeSnippets {
  dashboard_default: string;
  dashboard_shadcn: string;
  "dashboard_material-ui": string;
  reportbuilder_default: string;
  reportbuilder_shadcn: string;
  "reportbuilder_material-ui": string;
  sqleditor_default: string;
  sqleditor_shadcn: string;
  "sqleditor_material-ui": string;
  [key: string]: string; // This line allows dynamic keys
}

type CodeSnippetContainterProps = {
    component: string,
    style: string
}

const CodeSnippetContainter = ({component, style}: CodeSnippetContainterProps) => {
    const [codeSnippetKey, setCodeSnippetKey] = useState("");

    useEffect(() => {
        setCodeSnippetKey(`${component}_${style}`);
    }, [component, style]);

    const codeSnippet = (codeSnippets as CodeSnippets)[codeSnippetKey];

    const [highlightedCode, setHighlightedCode] = useState("")

    useEffect(() => {
    if (codeSnippet) {
        const temp = hljs.highlight(codeSnippet, { language: 'typescript' }).value;
        setHighlightedCode(temp);
    }
    }, [codeSnippet]);

    return (
        <pre style={{ margin: 0}}>
            <code className="language-html" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    )
}

export default CodeSnippetContainter