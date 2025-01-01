import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthContext from './AuthContext';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>{/* <Route path="/" element={<Test />}></Route> */}</Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
