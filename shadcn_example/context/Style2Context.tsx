import { Dispatch, SetStateAction, ReactNode, createContext, useState, useEffect } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import { useRef } from 'react';
import { useContext } from 'react';
import { StyleContext } from './StyleContext';

type ContextProviderProps = {
  children?: ReactNode
}

export const Style2Context = createContext({});

export const Style2Provider = ({children}: ContextProviderProps ) => {
  const { style, setStyle} = useContext(StyleContext);
  // const [wrappedChildren, setWrappedChildren] = useState<ReactNode>(children);

  return (
    <Style2Context.Provider value={{ }}>
      {/* {wrappedChildren} */}
      {
        style === "mantine" && (
            <MantineProvider>
              {children}
            </MantineProvider>
          )
      }
      {
        style !== "mantine" && children
      }
    </Style2Context.Provider>
  );
};
