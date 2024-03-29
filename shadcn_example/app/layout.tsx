'use client'
import { ReactNode, Dispatch, SetStateAction, createContext, useState, useContext } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { QuillProvider, Dashboard } from "@quillsql/react";
import Navbar from '@/components/Navbar';
import { StyleProvider } from '@/context/StyleContext';
import { createTheme, MantineProvider } from '@mantine/core';
import { ChakraProvider } from '@chakra-ui/react'
import '@mantine/dates/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const LibraryNameContext = createContext<
  [string, Dispatch<SetStateAction<string>>, boolean, Dispatch<SetStateAction<boolean>>]
>(null!);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<string>("");
  const [showCode, setShowCode] = useState(false);

  return (
    <LibraryNameContext.Provider value={[style, setStyle, showCode, setShowCode]}>
      {children}
    </LibraryNameContext.Provider>
  );
}

function LibraryProvider({children}) {
   const [style] = useContext(LibraryNameContext)

   if (style === "chakra") {
      return <ChakraProvider>{children}</ChakraProvider>
   }
   
   if (style === "mantine") {
      return <MantineProvider withGlobalStyles withNormalizeCSS>{children}</MantineProvider>
   }

   return <>{children}</>
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          {/* <QuillProvider organizationId='2' publicKey='6579031b3e41c378aa8180ec'>
          <StyleProvider>
                <MantineProvider>
                  <ChakraProvider>
                    <Navbar></Navbar>
                    {children}
                  </ChakraProvider>
                </MantineProvider>
            </StyleProvider>
          </QuillProvider> */}
          <ContextProvider>
            <LibraryProvider>
                <QuillProvider organizationId='2' publicKey='62cda15d7c9fcca7bc0a3689'>
                  <Navbar/>
                  {children}
                </QuillProvider>
            </LibraryProvider>
          </ContextProvider>
        </body>
      </html>
  )
}

// 6579031b3e41c378aa8180ec