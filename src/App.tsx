import { Outlet, Link } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import { SearchForm } from './components/SearchForm';
import Footer from './components/Footer';
import Random from './pages/Random';
import Home from './pages/Home';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';


function App() { 
  const {theme} = useContext(ThemeContext);

  return (

      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <NavBar />
        <h1>Bons Drink</h1>
        {/*<Home />*/}

        <Outlet />
        {/* <Random /> */}

        <Footer />

      </div>
 
  );
};

export default App;