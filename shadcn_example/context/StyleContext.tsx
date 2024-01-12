import { Dispatch, SetStateAction, ReactNode, createContext, useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core'
import { Theme } from '@radix-ui/themes';

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

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  // const wrappedChildren = (() => {
  //   switch(style) {
  //     case 'radix':
  //       return <Theme>{children}</Theme>
  //     case 'default':
  //       return <MantineProvider>{children}</MantineProvider>
  //     default:
  //       children
  //   }
  // })();

  return (
    <StyleContext.Provider value={{ style, setStyle, showCode, setShowCode }}>
      {children}
      {/* {wrappedChildren} */}
    </StyleContext.Provider>
  );
};
