import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContext from './AuthContext';
import { useEffect, useState } from 'react';
import Home from './components/general/Home';
import Branches from './components/general/Branches';
import About from './components/general/About';
import Contact from './components/general/Contact';
import GlobalNav from './components/general/GlobalNav';
import GlobalFooter from './components/general/GlobalFooter';
import Register from './components/general/Register';
import Login from './components/general/Login';
import AppNav from './components/app/AppNav';
import Account from './components/app/Account';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
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
              <AppNav />
              <Routes>
                <Route path="/account" element={<Account />}></Route>
              </Routes>
            </>
          )}
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
