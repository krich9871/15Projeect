import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


function AppProvider({children}) {
  return (
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
    return useContext(AppContext) ;
}

export{AppProvider,AppContext};