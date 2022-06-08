import React,{useState, useContext} from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [SidebarOPen,SetsidebarOpen] = useState(false);
  const [isModalopen,SetModalopen] = useState(false);

  const opensidebar = () =>{
    SetsidebarOpen(true) ;
  };
  const closesidebar = () =>{
    SetsidebarOpen(false);
  };
  const openModal = () =>{
    SetModalopen(true) ;
  };
  const closeModal = () =>{
    SetModalopen(false);
  };


  return( 
  <AppContext.Provider value={{isModalopen,SidebarOPen,openModal,closeModal,opensidebar,closesidebar,}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () =>{
  return useContext(AppContext);
};
export {AppContext, AppProvider};