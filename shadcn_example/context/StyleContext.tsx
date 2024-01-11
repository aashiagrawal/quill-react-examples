import { Dispatch, SetStateAction, ReactNode, createContext, useState } from 'react';

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

  return (
    <StyleContext.Provider value={{ style, setStyle, showCode, setShowCode }}>
      {children}
    </StyleContext.Provider>
  );
};
