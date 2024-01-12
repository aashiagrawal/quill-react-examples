import { Dispatch, SetStateAction, ReactNode, createContext, useState, useEffect } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import { useRef } from 'react';

interface StateContextType {
  style: string
  setStyle: Dispatch<SetStateAction<string>>;

  showCode: boolean
  setShowCode: Dispatch<SetStateAction<boolean>>;
}

type ContextProviderProps = {
  children?: ReactNode
}

export const StyleContext = createContext<StateContextType>({
  style: "",
  setStyle: () => {},

  showCode: false,
  setShowCode: () => {},
});

export const StyleProvider = ({children}: ContextProviderProps ) => {
  const [style, setStyle] = useState('default');
  const [showCode, setShowCode] = useState(false);
  const [wrappedChildren, setWrappedChildren] = useState<ReactNode>(children);

  const style_ref = useRef(null)
  // let wrappedChildren = children;

  console.log("style is: ", style)

  useEffect(() => {
    // // wrappedChildren = (() => {
    //   switch(style) {
    //     case 'mantine':
    //       setWrappedChildren((
    //         <MantineProvider>
    //           {children}
    //         </MantineProvider>
    //       ))
    //       // return (
    //       //   <MantineProvider>
    //       //     {children}
    //       //   </MantineProvider>
    //       // )
    //     default:
    //       setWrappedChildren(children)
    //       // return (
    //       //   children
    //       // )
    //   }
    // })();
  }, [style]);
  
  return (
    <StyleContext.Provider value={{ style, setStyle, showCode, setShowCode }}>
      {children}
      {/* {wrappedChildren} */}
      {/* {
        style === "mantine" && (
            <MantineProvider>
              {children}
            </MantineProvider>
          )
      }
      {
        style !== "mantine" && children
      } */}
    </StyleContext.Provider>
  );
};
