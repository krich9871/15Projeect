import React,{useState,useContext} from 'react'

const AppContext = React.createContext();

function AppProvider({children}) {
    const [isSidebaropen, SetSidebarOpen] = useState(false) ;
    const [isSubmenuopen,SetSubmenuopen] = useState(false) ;

    const openSidebar = () =>{
        SetSidebarOpen(true)
    }
    const closeSidebar = () => {
        SetSidebarOpen(false) ;
    }
    const openSubmenu = (text,coordinates) =>{
        SetSubmenuopen(true)
    }
    const closeSubmenu = () => {
        SetSubmenuopen(false) ;
    }
  return (
    <AppContext.Provider value={{isSidebaropen,isSubmenuopen,openSidebar,closeSidebar,openSubmenu,closeSubmenu}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => {
    return useContext(AppContext) ;
}

export{AppProvider,AppContext};