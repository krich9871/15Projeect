import React,{useState,useContext} from 'react'
import data from '../data/data' ;

const AppContext = React.createContext();

function AppProvider({children}) {
    const [isSidebaropen, SetSidebarOpen] = useState(false) ;
    const [isSubmenuopen,SetSubmenuopen] = useState(false) ;
    const [location,Setlocation] = useState({});
    const [page, Setpage] = useState({page:'',links: []});

    const openSidebar = () =>{
        SetSidebarOpen(true)
    }
    const closeSidebar = () => {
        SetSidebarOpen(false) ;
    }
    const openSubmenu = (text,coordinates) =>{
        const page = data.find((link)=> link.page === text);
        Setpage(page) ;
        Setlocation(coordinates);
        SetSubmenuopen(true);
    }
    const closeSubmenu = () => {
        SetSubmenuopen(false) ;
    }
  return (
    <AppContext.Provider value={{isSidebaropen,isSubmenuopen,openSidebar,closeSidebar,openSubmenu,closeSubmenu,location,page}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => {
    return useContext(AppContext) ;
}

export{AppProvider,AppContext};