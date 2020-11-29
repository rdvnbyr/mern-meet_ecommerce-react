import React, { createContext, useContext, useState } from 'react';

const AppUIContext = createContext();

export function useAppUIContext() {
    return useContext(AppUIContext);
};

export const AppUIConsumer = AppUIContext.Consumer;

export function AppUIProvider({appUIEvents, children}) {
    
    const [state, setstate] = useState();

    const value = {
        state,
        setstate
    };

    return(
        <AppUIContext.Provider value={value} >
            {children}
        </AppUIContext.Provider>
    )
};

