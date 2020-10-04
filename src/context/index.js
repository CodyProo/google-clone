import React, { createContext, useReducer } from 'react';
import { InitialData, StoreReducer } from './reducer';

export const StoreContext = createContext();
export const StoreDispatcher = createContext();
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, InitialData);
    return (
        <StoreContext.Provider value={state}>
            <StoreDispatcher.Provider value={dispatch}>
                {children}
            </StoreDispatcher.Provider>
        </StoreContext.Provider>
    );
};