import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
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
import Loans from './components/app/Loans';
import Cards from './components/app/Cards';
import Transactions from './components/app/Transactions';
import GetCard from './components/app/GetCard';
import TakeLoan from './components/app/TakeLoan';
import AccountContext from './AccountContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountNum, setAccountNum] = useState('');
  const [accountBranch, setAccountBranch] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          username,
          setUsername,
          navigate,
        }}
      >
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
        <AccountContext.Provider
          value={{
            accountNum,
            setAccountNum,
            accountBranch,
            setAccountBranch,
            accountBalance,
            setAccountBalance,
          }}
        >
          {isAuthenticated && (
            <>
              <AppNav />
              <Routes>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/loans" element={<Loans />}></Route>
                <Route path="/cards" element={<Cards />}></Route>
                <Route path="/getCard" element={<GetCard />}></Route>
                <Route path="/takeLoan" element={<TakeLoan />}></Route>
                <Route path="/transactions" element={<Transactions />}></Route>
              </Routes>
              <GlobalFooter />
            </>
          )}
        </AccountContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
