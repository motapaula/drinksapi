import { Outlet, Link } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';


function App() { 

  return (
    <div className='App'>
        <NavBar />
        <Outlet /> 
        <SearchBar />
        <Footer />
    </div>
  );
};

export default App;