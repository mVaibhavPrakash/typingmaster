import { createContext } from 'react';
import Hook from './Hook';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = Hook();
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
