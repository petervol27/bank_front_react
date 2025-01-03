import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContext from './AuthContext';
import { useState } from 'react';
import Home from './components/general/Home';
import Branches from './components/general/Branches';
import About from './components/general/About';
import Contact from './components/general/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/branches" element={<Branches />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
