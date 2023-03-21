import React, { createContext, useReducer } from 'react';

import { reducer } from './reducer';

export const GlobalState = createContext();

export default function State({ children }) {
  const initialState = {
    // lang: 'en',
    lang: 'pl',
    navMobileVisible: false,
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
