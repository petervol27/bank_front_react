import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContext from './AuthContext';
import { useState } from 'react';
import Home from './components/general/Home';
import Branches from './components/general/Branches';
import About from './components/general/About';
import Contact from './components/general/Contact';
import GlobalNav from './components/general/GlobalNav';
import GlobalFooter from './components/general/GlobalFooter';
import Register from './components/general/Register';
import Login from './components/general/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          {!isAuthenticated && (
            <>
              <GlobalNav />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/branches" element={<Branches />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
              <GlobalFooter />
            </>
          )}
          {isAuthenticated && (
            <>
              <h1>Testing authenticated</h1>
            </>
          )}
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
