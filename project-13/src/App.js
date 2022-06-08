import React from "react";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Submenu from "./Component/Submenu";

function App() {
  return (
    <>
       <Navbar/>
       <Sidebar/>
       <Hero/>
       <Submenu/>

    </>
  );
}

export default App;
