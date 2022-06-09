import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

//page
import Home from './Page/Home';
import About from './Page/About';
import SingleCocktail from './Page/SingleCocktail';
import Error from './Page/Error';

//
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <h1>sdsd</h1>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
