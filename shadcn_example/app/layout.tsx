'use client'
import { ReactNode, Dispatch, SetStateAction } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { QuillProvider, Dashboard } from "@quillsql/react";
import Navbar from '@/components/Navbar';
import { StyleProvider } from '@/context/StyleContext';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <QuillProvider organizationId='2' publicKey='6579031b3e41c378aa8180ec'>
          <StyleProvider>
            <Navbar></Navbar>
            {children}
            </StyleProvider>
          </QuillProvider>
        </body>
      </html>
  )
}
