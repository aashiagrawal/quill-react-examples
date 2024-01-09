import { Dispatch, SetStateAction, ReactNode, createContext, useState } from 'react';

interface StateContextType {
  style: string
  setStyle: Dispatch<SetStateAction<string>>;
}

type ContextProviderProps = {
  children?: ReactNode
}

export const StyleContext = createContext<StateContextType>({
  style: "",
  setStyle: () => {}
});

export const StyleProvider = ({children}: ContextProviderProps ) => {
  const [style, setStyle] = useState('default');

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
};
