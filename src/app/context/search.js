'use client'

import { createContext, useContext, useState } from "react";

// create context
export const SearchContext = createContext()

// provider 
export const SearchContextProvider = ({children}) => {
    return <SearchContext.Provider value={'search context'}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () =>  useContext(SearchContext);