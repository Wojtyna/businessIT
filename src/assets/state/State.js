import React, { createContext, useReducer } from 'react';

import { reducer } from './reducer';

export const GlobalState = createContext();

export default function State({ children }) {
  const userBrowserLang =
    typeof navigator !== 'undefined' && navigator.language.substring(0, 2);
  const storageBrowserLang =
    typeof window !== 'undefined' && localStorage.getItem('@BROWSER_LANG');

  const initialState = {
    lang: storageBrowserLang
      ? storageBrowserLang
      : userBrowserLang
      ? userBrowserLang
      : 'en',
    disabledBodyScrolling: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
}

// import React, {useContext} from "react"
// import { GlobalState } from "../assets/state/State"

// const { state , dispatch } = useContext(GlobalState);
