import React, { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store";

// Crear el provider
export const Context = createContext(null);

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <Context.Provider value={{ store, dispatch }}>
      {children}
    </Context.Provider>
  );
};

